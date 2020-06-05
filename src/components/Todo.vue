<template>
<div  class="todo">
    <div class="header">
        <p>{{todo.title}}</p>
        <div class="nav-block">
            <router-link :to="{name: 'EditTodo', params: {todo: this.todo}}">
              <b-icon icon="pencil-square" class="nav-icon bg-info"></b-icon>
            </router-link>
            <b-icon icon="x" class="nav-icon bg-info" @click="delTodo"></b-icon>
        </div>
    </div>
      <div class="content" v-for="item in todo.notes" :key="item.id">
        <p :style="item.done ? 'text-decoration: line-through;' : ''">{{ item.text }}</p>
      </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: ['todo'],
  name: 'Todo',
  data () {
    return {
      checked: false
    }
  },
  methods: {
    ...mapMutations(['deleteTodo']),
    delTodo () {
      this.$root.$emit('actionModal', 'deleteTodo', this.todo)
      // this.deleteTodo(this.todo.id)
    }
  }
}
</script>
