<template>
  <div  class="todos-wrapper">
    <div class="todo-container" v-for="item in todosList" :key="item.id">
          <Todo :todo='item'/>
    </div>
  </div>
</template>

<script>
import Todo from './Todo'
import { mapMutations } from 'vuex'
export default {
  name: 'TodosList',
  components: { Todo },
  methods: {
    ...mapMutations(['getAllTodos'])
  },
  mounted () {
    this.getAllTodos()
  },
  computed: {
    todosList () {
      return this.$store.getters.allTodos
    }
  }
}
</script>
