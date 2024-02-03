<template>
    <div>
    <h1>Products List</h1>
    <div style="display: flex;justify-content: center;margin-bottom: 16px;">
        <div style="margin-right: 8px;">
        <label>Filter by:</label>
        <select v-model="selectedCategory" @change="filterProducts">
            <option value="">All Categories</option>
            <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
            </option>
        </select>
        </div>
        <div>
        <label>Sort by:</label>
        <select v-model="selectedSort" @change="sortProducts">
            <option value="name">Name</option>
            <option value="price">Price</option>
        </select>
        </div>
    </div>
    <div class="product-grid">
      <div v-for="product in filteredProducts" :key="product.id" class="product-card">
        <img :src="product.image" alt="Product Image" width="100" style="min-height: 100px;" />
        <h3 class="name-styling">{{ product.name }}</h3>
        <p>Price: <span>&#8377;</span>{{ product.price }}</p>
        <button class="addtoCart-btn" @click="addToCart(product)">Add to Cart</button>
        <router-link :to="{ name: 'ProductDetails', params: { id: product.id }}">
          View Details
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductList',
  data () {
    return {
      products: [],
      categories: [],
      selectedCategory: '',
      selectedSort: 'name'
    }
  },
  computed: {
    filteredProducts () {
      let filtered = this.products
      if (this.selectedCategory) {
        filtered = filtered.filter(product => product.category === this.selectedCategory)
      }
      return filtered.sort((a, b) => {
        if (this.selectedSort === 'name') {
          return a.name.localeCompare(b.name)
        } else if (this.selectedSort === 'price') {
          return a.price - b.price
        }
        return 0
      })
    }
  },
  mounted () {
    this.fetchProducts()
  },
  methods: {
    async fetchProducts () {
      try {
        const response = await fetch('http://localhost:3000/products')
        this.products = await response.json()
        this.categories = [...new Set(this.products.map(product => product.category))]
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    },
    filterProducts () {
      // Update filtered products
    },
    sortProducts () {
      // Update sorted products
    },
    addToCart (product) {
      this.$store.dispatch('addToCart', product)
      this.$router.push({ name: 'ShoppingCart' })
    }
  }
}
</script>
<style scoped>
 .product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
.name-styling{
    overflow: hidden;
    white-space: nowrap
}

.product-card {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
