<template>
  <div>
    <UILoading v-if="tablePageStore.isLoading && !tablePageStore.data" />
    <div v-else class="table-page">
      <FilterPanel />
      <TheTable
        title="Тестовое задание для программиста Vue.js"
        :table="table"
        column-sizes="1fr 5fr 1fr 2fr"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TablePage',
});
</script>

<script setup lang="ts">
import UILoading from '@/components/UI/UILoading.vue';
import TheTable from '@/components/sections/table-page/TheTable.vue';

import { useTablePageStore } from '@/stores/table-page.store';

import { TableDataType } from '@/helpers/types/requests/table-data.type';

import { computed, Ref } from 'vue';
import FilterPanel from '@/components/sections/table-page/FilterPanel.vue';

const tablePageStore = useTablePageStore();

tablePageStore.getData();

const table: Ref<TableDataType[]> = computed(() => tablePageStore.data);
</script>

<style scoped lang="scss"></style>
