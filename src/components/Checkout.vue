<!-- Checkout.vue -->
<template>
    <div>
        <h1>Checkout</h1>
        <div v-if="cartItems.length">
            <div v-for="item in cartItems" :key="item.id" style="margin-bottom: 16px;">
                <img :src="item.image" alt="Product Image" style="width: 30%;" />
                <h3 class="name-styling">{{ item.name }}</h3>
                <p>Price: <span>&#8377;</span>{{ item.price }}</p>
            </div>
            <p style="color: #3f3fbd;">Total Price: {{ calculateTotalPrice() }}</p>
            <form @submit.prevent="placeOrder">
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="username" required />
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required />
                <button type="submit" class="checkOut-btn">Place Order</button>
            </form>
        </div>
        <div v-else>
            <p>Your cart is empty.</p>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      email: ''
    }
  },
  computed: {
    cartItems () {
      return this.$store.getters.cartItems
    }
  },
  methods: {
    calculateTotalPrice () {
      return this.cartItems.reduce((total, item) => total + item.price, 0)
    },
    placeOrder () {
      // Implement logic to place the order, e.g., send order details to a server
      // After placing the order, clear the cart and navigate to a thank you page
      this.$store.dispatch('clearCart')
      this.$router.push('/thank-you')
    }
  }
}
</script>
