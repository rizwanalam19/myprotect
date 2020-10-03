import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Home from '@/components/Home';
import Try from '@/components/try';
import Lafaza from '@/components/Lafaza';
import Product from '@/components/product';
import Cart from '@/components/cart';
import Billing from '@/components/billing';
import Testimonial from '@/components/testimonial';
import Certificate from '@/components/certificate';
import Checkout from '@/components/checkout';
import List from '@/components/listofproduct';
import Footer from '@/global/footer.vue';
import Navbar from '@/global/navbar.vue';
import Info from '@/components/infograph.vue';

Vue.use(Router);

export default new Router({
   mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/try',
      name: 'Try',
      component: Try
    },
    {
      path: '/lafaza',
      name: 'Lafaza',
      component: Lafaza
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/billing',
      name: 'Billing',
      component: Billing
    },
    {
      path: '/testimonial',
      name: 'Testimonial',
      component: Testimonial
    },
    {
      path: '/certificate',
      name: 'Certificate',
      component: Certificate
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/foot',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/Nav',
      name: 'Navbar',
      component: Navbar
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    }
  ]
});
