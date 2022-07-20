<script>
export default {
  props: {
    title: String,
    disabled: Boolean,
    handleClick: Function,
  },
};
</script>

<template>
  <button @click="handleClick" :disabled="disabled">
    {{ title }}
  </button>
</template>

<style scoped>
button {
  color: #fff;
  background: #000000;
  outline: none;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  cursor: pointer;
}
button:disabled {
  cursor: not-allowed;
}
</style>
