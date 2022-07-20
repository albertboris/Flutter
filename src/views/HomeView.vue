<script>
import BlogList from "@/components/FeaturedBlogComponent.vue";
import BlogCard from "@/components/BlogCardComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import MyButton from "@/components/MyButton.vue";
import Spinner from "@/components/SpinnerComponent.vue";

export default {
  components: { BlogList, BlogCard, Spinner, FooterComponent, MyButton },
  data() {
    return {
      page: 1,
      amount: 200,
    };
  },
  async created() {
    await this.$store.dispatch("fetchBlogs");
  },
  methods: {
    async loadMoreBlog() {
      this.page++;
      await this.$store.dispatch("fetchBlogs", this.page);
    },
    makePayment() {
      this.$launchFlutterwave({
        tx_ref: Date.now(),
        amount: this.amount,
        currency: "NGN",
        payment_options: "card,mobilemoney,ussd",
        customer: {
          email: "user@gmail.com",
          phonenumber: "08102909304",
          name: "yemi desola",
        },
        callback: function (data) {
          // specified callback function
          console.log(data);
        },
        customizations: {
          title: "My store",
          description: "Payment for items in cart",
          logo: "https://assets.piedpiper.com/logo.png",
        },
      });
    },
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    blogs() {
      return this.$store.getters.blogs?.slice(1);
    },
    featuredBlog() {
      return this.$store.getters.blogs?.[0];
    },
  },
};
</script>

<template>
  <Spinner v-if="loading" />
  <main :class="loading && 'noscroll'">
    <BlogList :blog="featuredBlog" />
    <div class="blog__articles">
      <BlogCard v-for="item in blogs" :key="item.id" :blog="item" />
    </div>
    <div style="display: flex; justify-content: center; margin-bottom: 10px">
      <MyButton :handleClick="loadMoreBlog" title="Load More" />
    </div>
    <FooterComponent :handleClick="makePayment" />
  </main>
</template>

<style scoped>
.blog__articles {
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: space-between;
}
.blog__articles > article {
  margin-bottom: 50px;
}
.noscroll {
  overflow: hidden;
}
</style>
