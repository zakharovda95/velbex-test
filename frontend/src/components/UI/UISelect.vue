<template>
  <div class="ui-select">
    <select v-bind="$attrs" @change="modelValueProxy = $event.target.value">
      <option selected>{{ preview }}</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UISelect',
  inheritAttrs: false,
});
</script>

<script setup lang="ts">
import { OptionType } from '@/helpers/types/stores/table-page-store.type';

import { computed, defineProps, PropType, defineEmits } from 'vue';

const props = defineProps({
  options: {
    type: Array as PropType<OptionType[]>,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
  preview: {
    type: String,
    required: false,
    default: () => 'Выбор значения',
  },
});

const emit = defineEmits(['update:modelValue']);

const modelValueProxy = computed({
  get() {
    return props.modelValue;
  },
  set(val: string) {
    emit('update:modelValue', val);
  },
});
</script>

<style scoped lang="scss">
.ui-select {
  select {
    padding: 5px;
    font-size: 1.1rem;

    option {
      padding: 5px;
    }
  }
}
</style>
