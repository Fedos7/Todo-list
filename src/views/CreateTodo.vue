<template>
  <div class="create-wrapper">
    <div class="create-content">
      <h3>Create Todo</h3>
      <input name="todo-title" type="text" placeholder="Enter name for todo..." v-model="todo.title">
      <div class="list">
          <ul v-if="todo.notes.length > 0">
            <h3>Notes:</h3>
              <li v-for="note in todo.notes" :key="note.id">
                  <p>{{ note.text }}</p>
              </li>
          </ul>
          <div class="create-note">
            <h3>Create note</h3>
            <textarea type="text" name="note-text" placeholder="Enter note text..."  v-model="noteText"/>
            <button @click="addNote(noteText)">Add more</button>
          </div>
      </div>
      <router-link :to="{name: 'TodosList'}">
        <button class="save" @click="saveNewTodo">Save Todo</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      noteText: '',
      todo: {
        id: Date.now(),
        title: '',
        notes: []
      }
    }
  },
  methods: {
    ...mapMutations(['createTodo']),
    addNote (note) {
      this.todo.notes.push({ id: Date.now(), text: note })
      this.noteText = ''
    },
    saveNewTodo () {
      this.createTodo(this.todo)
    }
  }
}
</script>
