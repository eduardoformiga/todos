<template>
  <div class="task">
    <checkbox></checkbox>
    <div class="task-details">
      <input-tag
        v-if="editMode"
        ref="taskInput"
        :text="text"
        placeholder="Um passo de cada vez"
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
    editable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      text: '',
      editMode: this.editable
    }
  },
  methods: {
    handleTask(taskText) {
      if (!this.isBlank(taskText)) {
        this.editMode = false
        this.text = taskText
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
    deleteTask() {
      alert('delete')
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
