<template>
  <div id="app">
    <Header/>
    <router-view>
      <TodosList/>
      <CreateTodo/>
    </router-view>
  </div>
</template>
<script>
import Header from './components/Header'
import TodosList from './components/TodosList'
import CreateTodo from './views/CreateTodo.vue'
export default {
  components: { TodosList, Header, CreateTodo }
}
</script>
