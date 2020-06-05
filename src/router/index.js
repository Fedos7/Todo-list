import Vue from 'vue'
import VueRouter from 'vue-router'
import TodosList from '../components/TodosList.vue'
import CreateTodo from '../views/CreateTodo.vue'
import EditTodo from '../views/EditTodo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TodosList',
    component: TodosList
  },
  {
    path: '/create',
    name: 'CreateTodo',
    component: CreateTodo
  },
  {
    path: '/edit',
    name: 'EditTodo',
    component: EditTodo,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
