<template>
  <div class="task">
    <checkbox></checkbox>
    <div class="task-details">
      <input-tag
        v-if="editMode"
        ref="taskInput"
        :text="text"
        :placeholder="placeholder"
        @enter="handleTask"
      ></input-tag>
      <item
        v-else
        :text="text"
        @editItem="editTask"
        @deleteItem="deleteTask"
      ></item>
    </div>
  </div>
</template>

<script>
import Checkbox from '../atoms/Checkbox'
import InputTag from '../molecules/InputTag'
import Item from '../molecules/Item'

export default {
  name: 'Task',
  components: {
    Checkbox,
    InputTag,
    Item
  },
  props: {
    model: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Um passo de cada vez'
    }
  },
  data() {
    return {
      text: this.title,
      editMode: this.editable
    }
  },
  methods: {
    handleTask(taskText) {
      if (!this.isBlank(taskText)) {
        if (this.model) {
          this.editMode = true
          this.title = ''
          this.resetInput()
        } else {
          this.editMode = false
          this.text = taskText
        }
        this.$emit('editTask', taskText)
      }
    },
    isBlank(str) {
      return !str || /^\s*$/.test(str)
    },
    async editTask() {
      this.editMode = true
      await this.$nextTick()
      this.focusInput()
    },
    focusInput() {
      this.$refs.taskInput.focus()
    },
    resetInput() {
      this.$refs.taskInput.reset()
    },
    deleteTask() {
      this.$emit('deleteTask')
    }
  }
}
</script>

<style lang="scss" scoped>
.task {
  padding: 8px 24px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: $grey-light-1;
  }

  .task-details {
    display: flex;
    padding-left: 14px;
    width: 100%;
  }
}
</style>
