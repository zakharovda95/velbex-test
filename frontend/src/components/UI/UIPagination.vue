<template>
  <div class="ui-pagination">
    <div class="page-nums">
      <div class="page-previous" v-if="page !== 1">&#5130;</div>
      <div
        :style="{ 'text-decoration': page === pageNum ? 'underline' : 'none' }"
        class="page-number"
        v-for="pageNum in pages"
        :key="pageNum"
        @click="$emit('custom:change-page', pageNum)"
      >
        {{ pageNum }}
      </div>
      <div class="page-next" v-if="page !== pages">&#5125;</div>
    </div>
    <UISelect
      class="select"
      :options="limitOptions"
      :model-value="limitProxy"
      @update:model-value="limitProxy = $event"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UIPagination',
});
</script>

<script setup lang="ts">
import UISelect from '@/components/UI/UISelect.vue';

import { OptionType } from '@/helpers/types/table-page-store.type';

import { computed, defineProps, defineEmits, PropType, Ref } from 'vue';

const props = defineProps({
  page: {
    type: Number,
    required: false,
    default: () => 1,
  },
  pages: {
    type: Number,
    required: false,
    default: () => 1,
  },
  limit: {
    type: Number,
    required: false,
    default: () => 5,
  },
  limitOptions: {
    type: Array as PropType<OptionType[]>,
    required: false,
    default: () => [],
  },
});

const emit = defineEmits(['custom:change-page', 'custom:update-limit']);

// const pages: Ref<number> = computed(() => {
//   const length = props.table.length;
//   return Math.ceil(length / props.limit);
// });

const limitProxy: Ref<string> = computed({
  get() {
    return String(props.limit);
  },
  set(val: string) {
    emit('custom:update-limit', Number(val));
    emit('custom:change-page', 1);
  },
});
</script>

<style scoped lang="scss">
.ui-pagination {
  display: flex;

  .page-nums {
    display: flex;

    .page-previous,
    .page-next,
    .page-number {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid black;
      padding: 2px;
      margin: 3px;
      font-size: 1.1rem;
      border-radius: 2px;
      cursor: pointer;
    }
    .select {
      margin-left: 20px;
    }
  }
}
</style>
