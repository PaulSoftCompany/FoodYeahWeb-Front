import Vue from 'vue'
import VueRouter from 'vue-router'
import Default from '../components/Default.vue';
import OrderIndex from '../components/orders/OrderIndex.vue';
import OrderCreate from '../components/orders/OrderCreate.vue';
import OrderDetail from '../components/orders/OrderDetail.vue';
import ClientIndex from '../components/clients/ClientIndex.vue';
import ProductIndex from '../components/products/ProductIndex.vue';
import ProductCreateOrUpdate from '../components/products/ProductCreateOrUpdate.vue';
import UserIndex from '../components/users/UserIndex.vue';
import store from '../store/index'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'default',
    component: Default
  },
  {
    path: '/orders',
    name: 'orders',
    component: OrderIndex
  },  
  {
    path: '/orders/:id/detail',
    name: 'ordersdetail',
    component: OrderDetail
  },
  {
    path: '/orders/create',
    name: 'orderscreate',
    component: OrderCreate
  },
  {
    path: '/clients',
    name: 'clients',
    component: ClientIndex
  },
  {
    path: '/products',
    name: 'products',
    component: ProductIndex
  },
  {
    path: '/products/create',
    name: 'productscreate',
    component: ProductCreateOrUpdate
  },
  {
    path: '/products/:id/edit',
    name: 'productsedit',
    component: ProductCreateOrUpdate
  },
  {
    path: '/users',
    name: 'users',
    component: UserIndex,
    beforeEnter: authorization
  }
]

//to:a donde va, from: de donde viene: next: si procede a que ruta lo enviamos
function authorization(to, from, next) {
  let user = store.state.user;

  if (user) {
    //Si nombre de la ruta es users && el usuario no incluye al admin 
    if (to.name === 'users' && !user.roles.includes('')) {
      return next('/');//ir a la pagina principal
    }
  }

  return next();
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
