<template>
  <div class="ui-pagination">
    <div class="page-nums">
      <div
        class="page-previous"
        :class="{ disabled: props.page === 1 }"
        @click="changePage($event, -1)"
      >
        &#5130;
      </div>
      <div
        :style="{ 'text-decoration': page === pageNum ? 'underline' : 'none' }"
        class="page-number"
        v-for="pageNum in pages"
        :key="pageNum"
        @click="$emit('custom:change-page', pageNum)"
      >
        {{ pageNum }}
      </div>
      <div
        class="page-next"
        :class="{ disabled: props.page >= props.pages }"
        @click="changePage($event, 1)"
      >
        &#5125;
      </div>
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

const limitProxy: Ref<string> = computed({
  get() {
    return String(props.limit);
  },
  set(val: string) {
    emit('custom:update-limit', Number(val));
    emit('custom:change-page', 1);
  },
});

const changePage = (event: Event, direction: number): void => {
  if ((props.page === 1 && direction === -1) || (props.page >= props.pages && direction === 1)) {
    event.preventDefault();
  } else {
    emit('custom:change-page', props.page + direction);
  }
};
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

  .disabled {
    cursor: not-allowed !important;
    color: #c0c3c5 !important;
    border: 1px solid #c0c3c5 !important;
  }
}
</style>
