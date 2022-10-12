<template>
  <div class="ui-button">
    <button>
      <slot />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UIButton',
});
</script>

<script setup lang="ts"></script>

<style scoped lang="scss">
.ui-button {
  margin: 5px;

  button {
    padding: 5px;
    font-size: 1.2rem;
  }
}
</style>
