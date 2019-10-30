import { getTasks } from '../services/task.service'

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
  editTask(state, { text, index }) {
    const task = state.todoList[index]
    task.text = text
    state.todoList.splice(index, 1, task)
  },
  checkTask(state, item) {
    const index = state.todoList.findIndex((task) => task.id === item.id)
    item.done = true
    state.todoList.splice(index, 1)
    state.todoList.unshift(item)
  },
  unCheckTask(state, item) {
    const index = state.todoList.findIndex((task) => task.id === item.id)
    item.done = false
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
  addTask({ commit }, item) {
    commit('addTask', item)
  },
  setSelectedTask({ commit }, task) {
    commit('setSelectedTask', task)
  },
  setConfirmModal({ commit }, confirm) {
    commit('setConfirmModal', confirm)
  },
  editTask({ commit }, payload) {
    commit('editTask', payload)
  },
  checkTask({ commit }, payload) {
    commit('checkTask', payload)
  },
  unCheckTask({ commit }, payload) {
    commit('unCheckTask', payload)
  },
  toggleGlobalEditMode({ commit }) {
    commit('toggleGlobalEditMode')
  },
  deleteTask({ commit }, item) {
    commit('deleteTask', item)
  },
  async searchTasks({ commit }) {
    const result = await getTasks()
    commit('setTasks', result.data)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
