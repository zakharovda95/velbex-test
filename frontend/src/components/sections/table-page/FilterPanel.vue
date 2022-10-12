<template>
  <div class="filter-panel">
    <div class="title">Панель фильтров</div>
    <div class="actions">
      <div class="column-select">
        <UISelect
          :model-value="columnValue"
          @update:model-value="columnValue = $event"
          :options="columnOptions"
          preview="Выбор столбца"
        />
      </div>
      <div class="condition-select">
        <UISelect
          :disabled="!tablePageStore.filter.column"
          :model-value="conditionValue"
          @update:model-value="conditionValue = $event"
          :options="filteredConditionOptions"
          preview="Выбор условия"
        />
      </div>
      <div class="value-row">
        <UIInput
          :disabled="!tablePageStore.filter.column && !tablePageStore.filter.condition"
          type="text"
          placeholder="Введите значение"
          :model-value="filterValue"
          @update:model-value="filterValue = $event"
        />
      </div>
    </div>
    <div class="button-group">
      <UIButton @click="tablePageStore.reset()">Сброс</UIButton>
      <UIButton @click="tablePageStore.random()">Рандом</UIButton>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FilterPanel',
});
</script>

<script setup lang="ts">
import UISelect from '@/components/UI/UISelect';
import UIInput from '@/components/UI/UIInput.vue';
import UIButton from '@/components/UI/UIButton.vue';

import { FilterType } from '@/helpers/types/table-page-store.type';
import { OptionType } from '@/helpers/types/table-page-store.type';
import { TableColumnTitlesEnum } from '@/helpers/enums/table-column-titles.enum';
import { FiltrationConditionTitlesEnum } from '@/helpers/enums/filtration-conditions.enum';

import { useTablePageStore } from '@/stores/table-page.store';

import { computed, Ref, watch } from 'vue';

const tablePageStore = useTablePageStore();

const filtersConfig: Ref<FilterType> = computed(() => tablePageStore.filter);
const columnOptions: Ref<OptionType[]> = computed(() => tablePageStore.options.columns);
const conditionOptions: Ref<OptionType[]> = computed(() => tablePageStore.options.conditions);

const filteredConditionOptions = computed(() => {
  return conditionOptions.value.filter(elem => {
    if (filtersConfig.value.column === TableColumnTitlesEnum.name) {
      return (
        elem.value === FiltrationConditionTitlesEnum.includes ||
        elem.value === FiltrationConditionTitlesEnum.equal
      );
    } else {
      return elem;
    }
  });
});

const columnValue: Ref<TableColumnTitlesEnum> = computed({
  get() {
    return tablePageStore.filter.column;
  },
  set(event: TableColumnTitlesEnum) {
    tablePageStore.filter.column = event;
  },
});

const conditionValue: Ref<FiltrationConditionTitlesEnum> = computed({
  get() {
    return tablePageStore.filter.condition;
  },
  set(val: FiltrationConditionTitlesEnum) {
    tablePageStore.filter.condition = val;
  },
});

const filterValue: Ref<string> = computed({
  get() {
    return tablePageStore.filter.value;
  },
  set(val: string) {
    tablePageStore.filter.value = val;
  },
});

watch(
  [conditionValue, columnValue, filterValue],
  () => {
    if (columnValue.value && conditionValue.value && filterValue.value) {
      tablePageStore.filterTable();
    } else {
      tablePageStore.data = tablePageStore.proxyData;
      tablePageStore.paginate(tablePageStore.proxyData);
    }
  },
  { deep: true },
);
</script>

<style scoped lang="scss">
@media (max-width: 799px) {
  .filter-panel {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
      font-size: 1.3rem;
      margin: 12px;
    }

    .actions {
      display: flex;
      flex-direction: column;

      .column-select,
      .condition-select,
      .value-row {
        margin: 20px;
      }
    }
    .button-group {
      display: flex;
    }
  }
}

@media (min-width: 800px) {
  .filter-panel {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
      font-size: 1.6rem;
      margin: 12px;
    }

    .actions {
      display: flex;
      flex-wrap: wrap;

      .column-select,
      .condition-select,
      .value-row {
        margin: 20px;
      }
    }
    .button-group {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
