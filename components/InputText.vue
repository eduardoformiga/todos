<template>
  <div class="input-text">
    <div v-if="canEdit" class="input-editable">
      <input
        v-model="taskText"
        type="text"
        :placeholder="text"
        class="input"
        @keypress.enter="handleTask"
      />
      <span>Enter ↵</span>
    </div>
    <div v-else class="input-pending">
      <p>{{ taskText }}</p>
      <div class="actions">
        <image-button
          img-name="edit.svg"
          alt="edit"
          @click="canEdit = true"
        ></image-button>
        <image-button
          img-name="delete.svg"
          alt="delete"
          @click="canEdit = true"
        ></image-button>
      </div>
    </div>
  </div>
</template>

<script>
import ImageButton from './ImageButton'
export default {
  name: 'InputText',
  components: {
    ImageButton
  },
  props: {
    text: {
      type: String,
      default: 'Um passo de cada vez'
    },
    editable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      taskText: '',
      canEdit: this.editable
    }
  },
  methods: {
    handleTask() {
      if (this.isValidTask()) {
        this.canEdit = false
      }
    },
    isValidTask() {
      return this.taskText.trim() !== ''
    }
  }
}
</script>

<style lang="scss" scoped>
.input-text {
  display: flex;
  padding-left: 14px;
  width: 100%;

  .input-editable,
  .input-pending {
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

  .input-editable {
    position: relative;

    span {
      position: absolute;
      right: 0;
      padding: 4px;
      font-family: InterUI;
      font-size: 10px;
      border-radius: 4px;
      background-color: $grey-light-2;
      color: $inactive;
    }
  }

  .input {
    display: inline-block;
    margin: 0;
    border: 0;
    padding: 3.5px 50px 3.5px 0;
    flex-grow: 1;
    vertical-align: middle;
    white-space: normal;
    background: none;
    line-height: 1;
    font-size: 16px;
    border-bottom: 1px solid $grey-light-2;
    box-sizing: content-box;

    &:not(:placeholder-shown) {
      border-bottom: 1px solid $active;
    }

    &:focus {
      outline: 0;
    }

    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: $inactive;
      opacity: 1; /* Firefox */
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: $inactive;
    }

    &::-ms-input-placeholder {
      /* Microsoft Edge */
      color: $inactive;
    }
  }
}
</style>
