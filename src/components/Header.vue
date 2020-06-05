<template>
    <div class="header">
        <ul class="nav-block">
            <li><router-link :to="{name: 'TodosList'}">All Todo</router-link></li>
            <li><router-link :to="{name: 'CreateTodo'}">Create new</router-link></li>
        </ul>
        <ActionModal v-if="modalVisible" :item="modaltem" :action="action"/>
    </div>
</template>

<script>
import ActionModal from './ActionModal'
export default {
  name: 'Header',
  components: { ActionModal },
  mounted () {
    this.$root.$on('actionModal', (action, item) => {
      this.action = action
      this.modaltem = item
      action !== 'cancel' ? this.modalVisible = true : this.modalVisible = false
    })
  },
  data () {
    return {
      modalVisible: false,
      modaltem: null,
      action: null
    }
  },
}
</script>
