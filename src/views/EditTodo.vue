<template>
    <div class="edit-todo">
        <div class="edit-content">
            <b-icon @click="delTodo()" icon="trash" class="nav-icon bg-info"></b-icon>
            <h3>Todo name</h3>
            <input type="text" v-model="changedTodo.title">
            <h3>Notes: </h3>
            <div class="notes-wrapper">
              <div class="list" v-for="note in changedTodo.notes" :key="note.id">
                      <textarea v-model="note.text"
                      :style="note.done ? 'text-decoration: line-through;' : ''"/>
                  <div class="action-note">
                      <input type="checkbox" :checked="note.done" v-model="note.done">
                      <b-icon @click="delNote(note.id)" icon="x" class="nav-icon bg-info"></b-icon>
                  </div>
              </div>
            </div>
        <div class="create-note">
            <h3>Create note: </h3>
            <textarea type="text" name="note-text" placeholder="Enter note text..."  v-model="noteText"/>
            <button @click="addNote(noteText)">Add</button>
        </div>
            <button @click="saveChanges">Save</button>
            <button class="cancel" @click="cancelChanges">Cancel</button>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'EditTodo',
  props: ['todo'],
  data () {
    return {
      noteText: '',
      changedTodo: this.todo
    }
  },
  methods: {
    ...mapMutations(['deleteTodo', 'editTodo']),
    delNote (id) {
      this.changedTodo = { ...this.changedTodo, notes: this.changedTodo.notes.filter(e => e.id !== id) }
    },
    addNote () {
      this.changedTodo.notes.push({
        id: Date.now(),
        text: this.noteText,
        done: false
      })
      this.noteText = ''
    },
    saveChanges () {
      this.editTodo(this.changedTodo)
      this.$router.go(-1)
    },
    delTodo () {
      this.$root.$emit('actionModal', 'deleteTodo', this.todo)
    },
    cancelChanges () {
      this.$root.$emit('actionModal', 'cancelChanges', this.todo)
    }
  }

}
</script>
