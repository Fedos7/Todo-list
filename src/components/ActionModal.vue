<template>
  <div class="modal-wrapper">
      <div class="content">
        <b-icon @click="closeModal" icon="x" class="nav-icon bg-info"></b-icon>
        <div class="modal-text">
            <p>{{actionText + ' ?'}}</p>
        </div>
        <div class="modal-buttons">
            <button @click="confirmAction">OK</button>
            <button @click="closeModal">Cancel</button>
        </div>
      </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'ActionModal',
  props: ['item', 'action'],
  computed: {
    actionText: function () {
      let text = ''
      switch (this.action) {
        case 'deleteTodo':
          text = 'Delete todo'
          break
        case 'cancelChanges':
          text = 'Cancel changes'
      }
      return text
    }
  },
  methods: {
    ...mapMutations(['deleteTodo']),
    closeModal () {
      this.$root.$emit('actionModal', 'cancel')
    },
    confirmAction () {
      switch (this.action) {
        case 'deleteTodo':
          this.deleteTodo(this.item.id)
          break
      }
      if (this.$route.name !== 'TodosList') this.$router.go(-1)
      this.closeModal()
    }
  }
}
</script>
