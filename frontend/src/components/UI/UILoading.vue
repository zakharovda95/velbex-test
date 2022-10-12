<template>
  <div class="ui-loading">
    <span>Загрузка!</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UILoading',
});
</script>

<style scoped lang="scss">
.ui-loading {
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  z-index: 10;
  overflow: hidden;
  font-size: 2rem;
  color: cadetblue;
  background: #232323;
}
</style>
