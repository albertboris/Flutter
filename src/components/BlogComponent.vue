<script>
export default {
  props: {
    blog: Object,
  },

  updated() {
    console.log("updated");
  },
  computed: {
    title() {
      return this.blog?.title?.rendered;
    },
    image() {
      return this.blog?.jetpack_featured_media_url;
    },
    author() {
      return this.blog?.parsely?.meta?.author[0]?.name;
    },
  },
  method: {
    LoadStore() {
      console.log("method");
    },
  },
};
</script>

<template>
  <article class="container">
    <p>By {{ author }} 2 Month Ago</p>
    <h1 v-html="title" />
    <div v-html="blog.content?.rendered" />
  </article>
</template>

<style scoped>
.container {
  margin: 0 auto;
  width: 70%;
  margin-bottom: 65px;
}
.container > h1 {
  font-weight: 900;
  font-size: 32px;
  line-height: 38px;
  display: flex;
  align-items: center;
  color: #2c2c2c;
  margin: 10px 0 20px;
}
.container__imageWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container__imageWrapper > img {
  width: 500px;
  height: 330px;
  padding: 30px;
}
.container > div > p {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  color: #6e6e6e;
}
</style>
