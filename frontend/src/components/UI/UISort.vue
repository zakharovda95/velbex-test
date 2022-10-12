<template>
  <div class="ui-sort">
    <span class="asc" v-if="tablePageStore.sort.param === SortConditionsEnum.desc"> &#9650; </span>
    <span class="desc" v-if="tablePageStore.sort.param === SortConditionsEnum.asc"> &#9660; </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UISort',
});
</script>

<script setup lang="ts">
import { SortConditionsEnum } from '@/helpers/enums/sort-conditions.enum';

import { useTablePageStore } from '@/stores/table-page.store';

const tablePageStore = useTablePageStore();
</script>

<style scoped lang="scss">
.ui-sort {
  cursor: pointer;
  span {
    font-size: 0.8rem;
  }
}
</style>
