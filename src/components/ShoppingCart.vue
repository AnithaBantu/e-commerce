<!-- ShoppingCart.vue -->
<template>
    <div>
      <h1>Shopping Cart</h1>
      <div v-if="cartItems.length">
      <div v-for="item in cartItems" :key="item.id" style="margin-bottom: 16px;">
        <img :src="item.image" alt="Product Image" style="width: 30%;" />
        <h3 class="name-styling">{{ item.name }}</h3>
        <p>Price: <span>&#8377;</span>{{ item.price }}</p>
        <router-link :to="{ name: 'ProductDetails', params: { id: item.id }}">
          View Details
        </router-link>
      </div>
      <p>Total Price: {{ calculateTotalPrice() }}</p>
      <button @click="checkout" class="checkOut-btn">Checkout</button>
    </div>
      <div v-else>
        <p>Your cart is empty.</p>
      </div>
    </div>
</template>
<script>
export default {
  computed: {
    cartItems () {
      return this.$store.getters.cartItems
    }
  },
  methods: {
    removeFromCart (productId) {
      this.$store.dispatch('removeFromCart', productId)
    },
    calculateTotalPrice () {
      return this.cartItems.reduce((total, item) => total + item.price, 0)
    },
    checkout () {
      this.$router.push('/checkout')
    }
  }
}
</script>
