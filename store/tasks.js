import { getTasks } from '../services/task.service'

const state = () => ({
  pending: [],
  done: [],
  globalEditMode: false,
  selectedTask: {},
  confirmModal: false
})

const getters = {
  pending(state) {
    return state.pending
  },
  done(state) {
    return state.done
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
    state.pending.push(payload)
  },
  editTask(state, { text, index }) {
    const task = state.pending[index]
    task.text = text
    state.pending.splice(index, 1, task)
  },
  checkTask(state, item) {
    const index = state.pending.findIndex((task) => task.id === item.id)
    state.pending.splice(index, 1)
    state.done.unshift(item)
  },
  unCheckTask(state, item) {
    const index = state.done.findIndex((task) => task.id === item.id)
    state.done.splice(index, 1)
    state.pending.push(item)
  },
  toggleGlobalEditMode(state) {
    state.globalEditMode = !state.globalEditMode
  },
  deleteTask(state, payload) {
    state.pending.splice(state.pending.indexOf(payload), 1)
  },
  setSelectedTask(state, payload) {
    state.selectedTask = payload
  },
  setConfirmModal(state, confirm) {
    state.confirmModal = confirm
  },
  setTasks(state, payload) {
    state.pending = payload.pending
    state.done = payload.done
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
