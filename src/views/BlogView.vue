<script>
import Blog from "@/components/BlogComponent.vue";
import BlogCard from "@/components/BlogCardComponent.vue";
import { mapActions } from "vuex";
import Spinners from "@/components/SpinnerComponent.vue";

export default {
  components: { Blog, BlogCard, Spinners },
  data() {
    return {};
  },
  watch: {
    $route: async function () {
      const id = this.$route.params.id;
      await this.$store.dispatch("getSingleBlog", id);
    },
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    blogs() {
      //get 4 blogs from the store
      //then filter if the current blog being viewed is in the list
      //then always get 3 blogs to display
      const id = this.$route.params.id;

      return this.loading
        ? []
        : this.$store.getters.blogs
            .slice(0, 4)
            .filter((blog) => blog.id !== Number(id))
            ?.slice(0, 3);
    },
    blog() {
      return this.$store.getters.blog;
    },
  },
  async created() {
    const id = this.$route.params.id;
    await Promise.allSettled([
      this.$store.dispatch("getSingleBlog", id),
      this.$store.dispatch("fetchBlogs"),
    ]);
  },
  methods: {
    ...mapActions(["fetchBlogs"]),
  },
};
</script>

<template>
  <Spinners v-if="loading" />

  <div class="blog" v-if="!loading">
    <Blog :blog="blog" />
    <div class="blog__bottomContainer">
      <h1>More Articles</h1>
      <div class="blog__articles">
        <BlogCard v-for="item in blogs" :key="item" :blog="item" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog__articles {
  flex-wrap: wrap;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
}
.blog__bottomContainer > h1 {
  font-weight: 900;
  font-size: 24px;
  line-height: 29px;
  color: #2c2c2c;
}
.blog__bottomContainer {
  margin-bottom: 25px;
}
</style>
