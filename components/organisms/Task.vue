<template>
  <div class="task">
    <checkbox
      :checked="isDone"
      :disabled="model"
      :state="state"
      @change="handleCheckbox"
    ></checkbox>
    <div class="task-details">
      <input-tag
        v-if="editMode"
        ref="taskInput"
        :text="text"
        :placeholder="placeholder"
        @enter="handleTask"
        @esc="cancelEditTask"
      ></input-tag>
      <item
        v-else
        :text="text"
        :actions="actions"
        :state="state"
        @editItem="editTask"
        @deleteItem="deleteTask"
      ></item>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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
  data() {
    return {
      text: this.title,
      editMode: this.editable
    }
  },
  computed: {
    ...mapGetters({
      globalEditMode: 'tasks/globalEditMode'
    }),
    isDone() {
      return this.state === 'done'
    }
  },
  methods: {
    ...mapActions({
      toggleGlobalEditMode: 'tasks/toggleGlobalEditMode'
    }),
    handleTask(taskText) {
      // validation
      if (this.isBlank(taskText)) return

      // new task
      if (this.model) {
        this.editMode = true
        this.title = ''
        this.resetInput()
      } else {
        // edit task
        this.editMode = false
        this.toggleGlobalEditMode()
        this.text = taskText
      }

      this.$emit('editTask', taskText)
    },
    isBlank(str) {
      return !str || /^\s*$/.test(str)
    },
    async editTask() {
      // validaiton: check if is editing another task
      if (this.globalEditMode) return

      this.editMode = true
      // TODO set editMode global to true
      await this.$nextTick()
      this.focusInput()
      this.toggleGlobalEditMode()
    },
    cancelEditTask() {
      this.editMode = false
      this.toggleGlobalEditMode()
    },
    focusInput() {
      this.$refs.taskInput.focus()
    },
    resetInput() {
      this.$refs.taskInput.reset()
    },
    deleteTask() {
      this.$emit('deleteTask')
    },
    handleCheckbox(check) {
      this.$emit('handleCheckbox', check)
    }
  }
}
</script>

<style lang="scss" scoped>
.task {
  padding: 8px 28px;
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
