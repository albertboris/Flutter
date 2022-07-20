<script>
import moment from "moment";
export default {
  components: {},
  props: {
    blog: Object,
  },
  computed: {
    excerpt() {
      const slicedText = this.blog?.excerpt?.rendered
        ?.split("<p>")[1]
        .split("</p>")[0];
      return slicedText?.substring(0, 400) + "...";
    },
    title() {
      return this.blog?.title?.rendered;
    },
    date() {
      return moment(this.blog?.parsely?.meta?.datePublished).fromNow();
    },
    id() {
      return this.blog?.id;
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
  <article
    class="blogList__container"
    @click="this.$router.push(`/blog/${id}`)"
  >
    <img alt="" class="blogList__image" :src="image" />
    <div class="featured__content">
      <div>
        <p><span>Front-end</span> . {{ date }}</p>
        <h2 v-html="title" />
        <p v-html="excerpt" />
      </div>
      <div>
        <p>3 min Read</p>
        <span :to="`/blog/${id}`">Read Full</span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.blogList__container {
  background: #ffffff;
  width: 100%;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  display: flex;
  padding: 8px;
  cursor: pointer;
}
.blogList__container:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  z-index: 10;
}
.blogList__container > img {
  width: 500px;
  height: 280px;
  margin-right: 15px;
}
.featured__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.featured__content > div:first-child > h2 {
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
.featured__content > div:first-child > p:first-child {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: #6e6e6e;
}
.featured__content > div:first-child > p:first-child > span {
  font-weight: 700;
}
.featured__content > div:first-child > p:last-child {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #6e6e6e;
}
.featured__content > div:last-child {
  display: flex;
  justify-content: space-between;
}

.featured__content > div:last-child > p {
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: #6e6e6e;
}
.featured__content > div:last-child > span {
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #1473e6;
}
@media screen and (max-width: 768px) {
  .blogList__container {
    flex-direction: column;
  }
  .blogList__container > img {
    width: 100%;
  }
}
</style>
