import {
  getTasks,
  saveTask,
  removeTask,
  updateTask
} from '../services/task.service'

const state = () => ({
  todoList: [],
  globalEditMode: false,
  selectedTask: {},
  confirmModal: false
})

const getters = {
  todoList(state) {
    return state.todoList
  },
  globalEditMode(state) {
    return state.globalEditMode
  },
  selectedTask(state) {
    return state.selectedTask
  },
  confirmModal(state) {
    return state.confirmModal
  }
}

const mutations = {
  addTask(state, payload) {
    state.todoList.push(payload)
  },
  editTask(state, { index, item }) {
    state.todoList.splice(index, 1, item)
  },
  checkTask(state, item) {
    const index = state.todoList.findIndex((task) => task.id === item.id)
    state.todoList.splice(index, 1)
    state.todoList.unshift(item)
  },
  unCheckTask(state, item) {
    const index = state.todoList.findIndex((task) => task.id === item.id)
    state.todoList.splice(index, 1)
    state.todoList.push(item)
  },
  toggleGlobalEditMode(state) {
    state.globalEditMode = !state.globalEditMode
  },
  deleteTask(state, payload) {
    state.todoList.splice(state.todoList.indexOf(payload), 1)
  },
  setSelectedTask(state, payload) {
    state.selectedTask = payload
  },
  setConfirmModal(state, confirm) {
    state.confirmModal = confirm
  },
  setTasks(state, payload) {
    state.todoList = payload
  }
}

const actions = {
  async addTask({ commit }, item) {
    await saveTask(item)
    commit('addTask', item)
  },
  setSelectedTask({ commit }, task) {
    commit('setSelectedTask', task)
  },
  setConfirmModal({ commit }, confirm) {
    commit('setConfirmModal', confirm)
  },
  async editTask({ commit }, { text, item, index }) {
    const itemRef = { ...item }
    itemRef.text = text
    await updateTask(itemRef)
    commit('editTask', { index, item: itemRef })
  },
  async checkTask({ commit }, item) {
    const itemRef = { ...item }
    itemRef.done = true
    await updateTask(itemRef)
    commit('checkTask', itemRef)
  },
  async unCheckTask({ commit }, item) {
    const itemRef = { ...item }
    itemRef.done = false
    await updateTask(itemRef)
    commit('unCheckTask', itemRef)
  },
  toggleGlobalEditMode({ commit }) {
    commit('toggleGlobalEditMode')
  },
  async deleteTask({ commit }, item) {
    await removeTask(item)
    commit('deleteTask', item)
  },
  async searchTasks({ commit }) {
    const tasks = await getTasks()
    commit('setTasks', tasks)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
