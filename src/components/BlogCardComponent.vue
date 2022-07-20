<script>
import moment from "moment";
export default {
  props: {
    blog: Object,
  },
  components: {},
  computed: {
    excerpt() {
      const slicedText = this.blog?.excerpt?.rendered
        ?.split("<p>")[1]
        .split("</p>")[0];
      return slicedText?.substring(0, 100) + "...";
    },
    title() {
      return this.blog?.title?.rendered?.substring(0, 50) + "...";
    },
    id() {
      return this.blog?.id;
    },
    date() {
      return moment(this.blog?.parsely?.meta?.datePublished).fromNow();
    },
    image() {
      return this.blog?.jetpack_featured_media_url;
    },
  },
  methods: {
    getExcerpt(text) {
      const slicedText = text?.split("<p>")[1].split("</p>")[0];
      return slicedText?.substring(0, 200) + "...";
    },
  },
};
</script>
<template>
  <article class="blog__container" @click="this.$router.push(`/blog/${id}`)">
    <img alt="" class="blog__image" :src="image" />
    <div class="content">
      <div>
        <p><span>Front-end</span> . {{ date }}</p>
        <h2 v-html="title" />
        <p v-html="excerpt" />
      </div>
      <div>
        <p>12 min Read</p>
        <span>Read Full</span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.blog__container {
  background: #ffffff;
  width: 340px;
  height: 420px;
  max-height: 420px;
  max-width: 340px;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}
.blog__container:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  z-index: 900;
}
.blog__container > img {
  width: 320px;
  height: 200px;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1 auto;
}
.content > div:first-child > h2 {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 900;
  font-size: 22px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: #2c2c2c;
  margin: 8px 0;
}
.content > div:first-child > p:first-child {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: #6e6e6e;
  margin-top: 15px;
}
.content > div:first-child > p:first-child > span {
  font-weight: 700;
}
.content > div:first-child > p:last-child {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #6e6e6e;
}
.content > div:last-child {
  display: flex;
  justify-content: space-between;
}

.content > div:last-child > p {
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: #6e6e6e;
}
.content > div:last-child > span {
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #1473e6;
}
@media screen and (max-width: 768px) {
  .blog__container {
    width: 100%;
    height: auto;
    max-height: none;
    max-width: none;
  }
}
</style>
