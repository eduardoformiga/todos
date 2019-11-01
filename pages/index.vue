<template>
  <div class="container">
    <img
      v-if="$mq == 'lg'"
      class="bg-illustration"
      src="../assets/images/background-illustration.svg"
      alt="background-ilustration"
    />
    <transition name="fade">
      <section
        v-if="!hasTask"
        class="todo-first-task"
      >
        <div class="title">Nenhuma tarefa criada ainda.</div>
        <div class="state-image">
          <picture>
            <source
              srcset="../assets/images/meditating-sm.svg"
              media="(max-width: 450px)"
            />
            <img
              src="../assets/images/meditating.svg"
              alt="meditating"
            />
          </picture>
        </div>
        <div class="todo-list__title">Que tal organizar as ideias criando uma lista agora?</div>
        <task
          :model="true"
          @editTask="handleAddTask"
        ></task>
      </section>
    </transition>
    <transition name="fade">
      <section
        v-if="hasTask && !hasOnlyDoneTask"
        class="todo-has-task"
      >
        <div class="todo-list__label--pending">Pendente {{ pendingTasksCount }}</div>
        <task
          v-for="(item, index) in pendingTasks"
          :key="item.id"
          :title="item.text"
          :editable="false"
          @handleCheckbox="handleCheckTask(...arguments, item)"
          @editTask="handleEditTask(...arguments, item, index)"
          @deleteTask="confirmDelete(item)"
        ></task>
        <task
          placeholder="Cuidado com o Burnout, viu?"
          :model="true"
          @editTask="handleAddTask"
        ></task>
        <div v-if="hasDoneTask">
          <div class="todo-list__label--done">Feito ({{ doneTasks.length }})</div>
          <task
            v-for="item in doneTasks"
            :key="item.id"
            :title="item.text"
            :editable="false"
            :actions="false"
            state="done"
            @handleCheckbox="handleCheckTask(...arguments, item)"
          ></task>
        </div>
      </section>
    </transition>
    <transition name="fade">
      <section
        v-if="hasOnlyDoneTask"
        class="todo-has-only-done-task"
      >
        <div class="title">Tudo pronto!</div>
        <div class="state-image">
          <picture>
            <source
              srcset="../assets/images/coffee-sm.svg"
              media="(max-width: 450px)"
            />
            <img
              src="../assets/images/coffee.svg"
              alt="coffee"
            />
          </picture>
        </div>
        <div class="todo-list__title">Sensação de dever cumprido. Que tal um café agora?</div>
        <task
          placeholder="Pera, tem mais uma coisa"
          :model="true"
          @editTask="handleAddTask"
        ></task>
        <div>
          <div class="todo-list__label--done">Feito ({{ doneTasks.length }})</div>
          <task
            v-for="item in doneTasks"
            :key="item.id"
            :title="item.text"
            :editable="false"
            :actions="false"
            state="done"
            @handleCheckbox="handleCheckTask(...arguments, item)"
          ></task>
        </div>
      </section>
    </transition>
    <img
      v-if="$mq == 'lg'"
      class="bg-illustration-right"
      src="../assets/images/background-illustration-tree.png"
      alt="background-ilustration-tree"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Task from '../components/organisms/Task'

export default {
  components: { Task },
  data() {
    return {
      confirmModal: false,
      selectedTask: {}
    }
  },
  computed: {
    ...mapGetters({
      todoList: 'tasks/todoList'
    }),
    hasTask() {
      return this.todoList.length > 0
    },
    hasDoneTask() {
      return !!this.todoList.filter((task) => task.done).length
    },
    doneTasks() {
      return this.todoList.filter((task) => task.done)
    },
    pendingTasks() {
      return this.todoList.filter((task) => !task.done)
    },
    pendingTasksCount() {
      const pendingTasks = this.todoList.filter((task) => !task.done).length
      return pendingTasks > 0 ? `(${pendingTasks})` : ''
    },
    hasOnlyDoneTask() {
      return this.todoList.length > 0
        ? this.todoList.every((task) => task.done)
        : false
    }
  },
  async fetch({ store, params, app }) {
    await store.dispatch('tasks/searchTasks')
  },
  methods: {
    ...mapActions({
      addTask: 'tasks/addTask',
      editTask: 'tasks/editTask',
      checkTask: 'tasks/checkTask',
      unCheckTask: 'tasks/unCheckTask',
      setConfirmModal: 'tasks/setConfirmModal',
      searchTasks: 'tasks/searchTasks',
      setSelectedTask: 'tasks/setSelectedTask'
    }),
    async handleAddTask(text) {
      const task = {
        id: new Date().getTime(),
        text,
        done: false
      }
      this.$nuxt.$loading.start()
      await this.addTask(task)
      this.$nuxt.$loading.finish()
    },
    async handleEditTask(text, item, index) {
      this.$nuxt.$loading.start()
      await this.editTask({ text, item, index })
      this.$nuxt.$loading.finish()
    },
    handleCheckTask(check, item) {
      this.$nuxt.$loading.start()
      if (check) {
        setTimeout(async () => {
          await this.checkTask(item)
          this.$nuxt.$loading.finish()
        }, 1000)
      } else {
        setTimeout(async () => {
          await this.unCheckTask(item)
          this.$nuxt.$loading.finish()
        }, 1000)
      }
    },
    confirmDelete(task) {
      this.setSelectedTask(task)
      this.setConfirmModal(true)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  max-width: 800px;
  min-width: 320px;
  min-height: 422px;
  margin: auto;
  border-radius: 12px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.15);
  background-color: $white;
  transform: translateY($translate-size);

  .bg-illustration {
    position: absolute;
    top: 98px;
    left: -120px;
  }
  .bg-illustration-right {
    position: absolute;
    width: 100px;
    height: 180px;
    right: -120px;
    bottom: -54px;
  }

  .title {
    padding: 24px 50px;
    font-size: 24px;
    text-align: center;
    color: $primary;
  }
  .state-image {
    display: flex;
    justify-content: center;
    img {
      max-width: 100%;
      height: auto;
    }
  }

  .todo-list__label--pending {
    font-size: 16px;
    color: $primary;
    padding: 31px 28px 12px;
  }

  .todo-list__label--done {
    font-size: 16px;
    color: $primary;
    padding: 24px 28px 12px;
  }

  .todo-list__title {
    padding: 40px 24px 12px 24px;
    font-size: 16px;
    color: $primary;
  }

  .todo-has-only-done-task {
    padding-bottom: 40px;
    .title {
      padding: 32px 50px 28px;
    }
  }
}

.fade-enter-active {
  transition: opacity 1.5s;
}
.fade-leave-active {
  transition: opacity 0s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}

@media screen and (max-width: 855px) {
  .container {
    margin: 0 1.75rem;
  }
}

@media screen and (max-width: 450px) {
  .container {
    min-height: 382px;
    transform: translateY($translate-size-mobile);
  }
}
</style>
