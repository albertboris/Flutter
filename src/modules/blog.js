import axios from "axios";
const store = {
  blogs: [],
  blog: {},
  loading: false,
  error: null,
};

const getters = {
  loading: (state) => state.loading,
  blogs: (state) => state.blogs,
  blog: (state) => state.blog,
};

const actions = {
  async fetchBlogs({ commit }, page = 1) {
    try {
      commit("setLoading", true);
      const request = await axios.get(
        `https://techcrunch.com/wp-json/wp/v2/posts?page=${page}&per_page=10`
      );
      await commit("setBlogs", { blogs: request.data, page });
    } catch (err) {
      await commit("setError", err);
    }
  },
  async getSingleBlog({ commit }, id) {
    try {
      commit("setLoading", true);
      const request = await axios.get(
        `https://techcrunch.com/wp-json/wp/v2/posts/${id}`
      );
      await commit("setSingleBlog", request.data);
    } catch (err) {
      await commit("setError", err);
    }
  },
};
const mutations = {
  setBlogs(state, payload) {
    const { blogs, page } = payload;
    state.blogs = page === 1 ? blogs : state.blogs.concat(blogs);
    state.error = null;
    state.loading = false;
  },
  setError(state, error) {
    state.error = error;
    state.user = null;
    state.loading = false;
  },
  setLoading(state, value) {
    state.loading = value;
  },
  setSingleBlog(state, blog) {
    state.blog = blog;
    state.error = null;
    state.loading = false;
  },
};
export default {
  state: store,
  getters,
  actions,
  mutations,
};
