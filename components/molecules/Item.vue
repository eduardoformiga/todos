<template>
  <div class="item">
    <p>{{ text }}</p>
    <div class="actions">
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

  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 44px;
  }
}
</style>
