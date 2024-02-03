<template>
    <div v-if="product">
        <img :src="product.image" alt="Product Image" style="width: 30%;"/>
        <h3>{{ product.name }}</h3>
        <p>Price: <span style="font-weight: 600;">&#8377;{{ product.price }}</span></p>
    <h2 style="text-decoration: underline;">User Reviews</h2>
    <div v-for="review in product.reviews" :key="review.id">
        <p>
            <span>{{ review.user }}:</span>
            <span style="font-weight: 600;">{{ review.comment }}</span>
        </p>
    </div>
    <h2 style="text-decoration: underline;">Related Products</h2>
    <div class="related-products" v-if="relatedProducts.length">
      <div v-for="relatedProduct in relatedProducts" :key="relatedProduct.id" class="product-card">
        <img :src="relatedProduct.image" alt="Image" width="100" />
        <h3>{{ relatedProduct.name }}</h3>
        <p>Price: <span style="font-weight: 600;">&#8377;{{ relatedProduct.price }}</span></p>
      </div>
    </div>
    <div v-else>
      <div>
        Related Products Not Available
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductDetails',
  data () {
    return {
      product: null,
      relatedProducts: []
    }
  },
  mounted () {
    this.fetchProductDetails()
  },
  methods: {
    async fetchProductDetails () {
      const productId = this.$route.params.id
      try {
        const response = await fetch(`http://localhost:3000/products/${productId}`)
        this.product = await response.json()
        this.fetchRelatedProducts()
      } catch (error) {
        console.error('Error fetching product details:', error)
      }
    },
    async fetchRelatedProducts () {
      // Implement logic to fetch related products
    }
  }
}
</script>
<style scoped>
.related-products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.product-card {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
