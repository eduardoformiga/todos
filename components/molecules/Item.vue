<template>
  <div class="item">
    <p :class="stateClass">{{ text }}</p>
    <div v-if="actions" class="actions">
      <image-button
        img-name="edit.svg"
        alt="edit"
        @click="editItem()"
      ></image-button>
      <image-button
        img-name="delete.svg"
        alt="delete"
        @click="deleteItem()"
      ></image-button>
    </div>
  </div>
</template>

<script>
import ImageButton from '../atoms/ImageButton'
export default {
  name: 'TaskLabel',
  components: {
    ImageButton
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    actions: {
      type: Boolean,
      default: true
    },
    state: {
      type: String,
      default: 'pending'
    }
  },
  computed: {
    stateClass() {
      return this.state === 'done' ? 'item-label--done' : ''
    }
  },
  methods: {
    editItem() {
      this.$emit('editItem')
    },
    deleteItem() {
      this.$emit('deleteItem')
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .item-label--done {
    text-decoration: line-through;
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 56px;
  }
}
</style>
