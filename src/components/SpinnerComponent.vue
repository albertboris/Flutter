<script>
import { AtomSpinner } from "epic-spinners";
export default {
  components: { AtomSpinner },
};
</script>
<template>
  <div class="spinner__container">
    <atom-spinner :animation-duration="1000" :size="60" :color="'#181818'" />
  </div>
</template>

<style scoped>
.spinner__container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background: #f8f8f8;
  opacity: 0.8;
}
</style>
