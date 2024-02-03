import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import ProductList from '@/components/ProductList.vue'
import ProductDetails from '@/components/ProductDetails.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'
import CommunityForum from '@/components/CommunityForum.vue'
import Checkout from '../components/Checkout.vue'
import ThankYouPage from '../components/ThankYouPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    { path: '/products', component: ProductList },
    { path: '/products/:id', name: 'ProductDetails', component: ProductDetails },
    { path: '/cart', name: 'ShoppingCart', component: ShoppingCart },
    { path: '/forum', name: 'CommunityForum', component: CommunityForum },
    { path: '/checkout', name: 'Checkout', component: Checkout },
    { path: '/thank-you', name: 'ThankYou', component: ThankYouPage }
  ]
})
