<template>
  <div class="ui-input">
    <input
      v-bind="$attrs"
      :value="modelValueProxy"
      @input="modelValueProxy = $event.target.value"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UIInput',
  inheritAttrs: false,
});
</script>

<script setup lang="ts">
import { defineProps, defineEmits, computed, Ref } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(['update:modelValue']);

const modelValueProxy: Ref<string> = computed({
  get() {
    return props.modelValue;
  },
  set(val: string) {
    emits('update:modelValue', val);
  },
});
</script>

<style lang="scss">
.ui-input {
  input {
    padding: 5px;
    font-size: 1.1rem;
  }
}
</style>
