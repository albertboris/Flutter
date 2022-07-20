<script>
import MyButton from "@/components/MyButton.vue";
export default {
  components: { MyButton },
  props: { handleClick: Function },
  method: {
    handleSubmit() {},
  },
};
</script>

<template>
  <div class="container">
    <h1>Join our Team of Writers</h1>
    <p>
      On dasdas, writers earn a living doing what they love. Getting started is
      easy. Just pay a one time <span>$25 fee</span> and everything is ready to
      go.
    </p>
    <MyButton
      :handleClick="handleClick"
      :disabled="page === 1"
      title="JOIN US"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 100px;
}
.container > h1 {
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  color: #2c2c2c;
}
.container > p {
  font-weight: 400;
  font-size: 19px;
  line-height: 32px;
  width: 70%;
  color: #6e6e6e;
  margin-bottom: 30px;
}
.container > p > span {
  font-weight: 600;
}
</style>
