// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [], // New state for the shopping cart
    forumPosts: [],
    products: [],
    recommendations: []
  },
  mutations: {
    addToCart (state, product) {
      state.cart.push(product)
    },
    removeFromCart (state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId)
    },
    clearCart (state) {
      state.cart = []
    },
    addToForum (state, post) {
      state.forumPosts.push(post)
    },
    editForumPost (state, { postId, newContent }) {
      const postIndex = state.forumPosts.findIndex(post => post.id === postId)
      if (postIndex !== -1) {
        state.forumPosts[postIndex].content = newContent
      }
    },
    deleteForumPost (state, postId) {
      state.forumPosts = state.forumPosts.filter(post => post.id !== postId)
    },
    setRecommendations (state, recommendedProducts) {
      state.recommendations = recommendedProducts
    },
    setProducts (state, products) {
      state.products = products
    }
  },
  actions: {
    // You can add additional actions here if needed
    addToCart ({ commit }, product) {
      commit('addToCart', product)
    },
    removeFromCart ({ commit }, productId) {
      commit('removeFromCart', productId)
    },
    clearCart ({ commit }) {
      commit('clearCart')
    },
    addToForum ({ commit }, post) {
      commit('addToForum', post)
    },
    editForumPost ({ commit }, { postId, newContent }) {
      commit('editForumPost', { postId, newContent })
    },
    deleteForumPost ({ commit }, postId) {
      commit('deleteForumPost', postId)
    },
    generateRecommendations ({ commit, state }) {
      // Simple rule-based recommendation system (Replace this with your algorithm)
      const userPreferences = ['electronics', 'clothing']
      const purchaseHistory = state.cart.map(item => item.category)
      const communityInteractions = state.forumPosts.map(post => post.tags).flat()
      // Combine user preferences, purchase history, and community interactions
      const combinedInterests = [...userPreferences, ...purchaseHistory, ...communityInteractions]
      const uniqueInterests = Array.from(new Set(combinedInterests))
      const recommendedProducts = state.products.filter(product =>
        uniqueInterests.includes(product.category) && !purchaseHistory.includes(product.id)
      )
      commit('setRecommendations', recommendedProducts)
    },
    setProducts ({ commit }, products) {
      commit('setProducts', products)
    }
  },
  getters: {
    // ... existing getters ...
    cartItems: (state) => state.cart,
    forumPosts: (state) => state.forumPosts,
    recommendations: state => state.recommendations,
    products: state => state.products
  }
})
