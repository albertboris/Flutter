<script>
import AppLogo from "./icons/AppLogo.vue";

export default { components: { AppLogo } };
</script>

<template>
  <div class="appLogo__container">
    <AppLogo @click="this.$router.push('/')" style="cursor: pointer" />
  </div>
</template>

<style scoped>
.appLogo__container {
  width: 80px;
  height: 80px;
  margin-bottom: 65px;
}
</style>
