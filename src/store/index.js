import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: Date.now(),
        title: 'firstTodo',
        notes: [
          {
            id: Date.now(),
            text: 'some note',
            done: false
          }
        ]
      }
    ]
  },
  getters: {
    allTodos: (state) => { return state.todos },
    getTodo: (state, id) => { return state.todos.filter(i => i.id === id) }
  },
  mutations: {
    getAllTodos (state) {
      const allTodos = JSON.parse(window.localStorage.getItem('todosList'))
      if (allTodos) state.todos = allTodos
    },
    createTodo (state, newTodo) {
      state.todos = [...state.todos, newTodo]
      window.localStorage.setItem('todosList', JSON.stringify(state.todos))
    },
    deleteTodo (state, id) {
      state.todos = state.todos.filter(i => i.id !== id)
      window.localStorage.setItem('todosList', JSON.stringify(state.todos))
    },
    editTodo (state, changes) {
      state.todos = state.todos.map(e => e.id === changes ? changes : e)
      window.localStorage.setItem('todosList', JSON.stringify(state.todos))
    }
  },
  actions: {

  },
  modules: {
  }
})
