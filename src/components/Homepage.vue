<template>
<div>
    <h1>Featured Products</h1>
    <div v-if="featuredProducts.length" class="product-grid">
      <div v-for="product in featuredProducts" :key="product.id" class="product-card">
        <img :src="product.image" alt="Product Image" width="100" style="min-height: 100px;" />
        <h3 class="name-styling">{{ product.name }}</h3>
        <p>Price: <span>&#8377;</span>{{ product.price }}</p>
        <router-link :to="{ name: 'ProductDetails', params: { id: product.id }}">
          View Details
        </router-link>
      </div>
    </div>
    <h2>Upcoming Promotions</h2>
    <div v-if="upcomingPromotions.length" class="product-grid">
      <div v-for="promotion in upcomingPromotions" :key="promotion.id" class="product-card">
        <img :src="promotion.image" alt="Product Image" width="100" style="min-height: 100px;" />
        <h3 class="name-styling">{{ promotion.name }}</h3>
        <p>{{ promotion.discount }} % discount</p>
      </div>
    </div>
    <h2 v-if="personalizedRecommendations.length">Personalized Recommendations</h2>
    <div v-if="personalizedRecommendations.length">
      <ul>
        <li v-for="recommendation in personalizedRecommendations" :key="recommendation.id">
          {{ recommendation.name }} - {{ recommendation.category }}
        </li>
      </ul>
    </div>
</div>
    <!-- <div>
    <h2>Homepage</h2>
    <h1>Featured Products</h1>
    <router-link to="/products">View Products</router-link>
    Display featured products with dynamic recommendations here
    Include a section for upcoming products or promotions
  </div> -->
</template>
<script>
export default {
  name: 'Homepage',
  data () {
    return {
      featuredProducts: [],
      upcomingPromotions: [],
      personalizedRecommendations: []
    }
  },
  mounted () {
    this.fetchFeaturedProducts()
    this.fetchUpcomingPromotions()
    this.fetchPersonalizedRecommendations()
  },
  methods: {
    async fetchFeaturedProducts () {
      try {
        const response = await fetch('http://localhost:3000/featuredProducts')
        this.featuredProducts = await response.json()
        this.$store.commit('setProducts', this.featuredProducts)
      } catch (error) {
        console.error('Error fetching featured products:', error)
      }
    },
    async fetchUpcomingPromotions () {
      try {
        const response = await fetch('http://localhost:3000/upcomingPromotions')
        this.upcomingPromotions = await response.json()
      } catch (error) {
        console.error('Error fetching upcoming promotions:', error)
      }
    },
    fetchPersonalizedRecommendations () {
      this.$store.dispatch('generateRecommendations')
      this.personalizedRecommendations = this.$store.getters.recommendations
    }
  }
}
</script>
<style scoped>
  .product-card {
  border: 1px solid #ccc;
  padding: 10px;
}
.name-styling{
    overflow: hidden;
    white-space: nowrap
}
</style>
