import { getTasks } from '../services/task.service'

const state = () => ({
  pending: [],
  done: []
})

const getters = {
  pending(state) {
    return state.pending
  },
  done(state) {
    return state.done
  }
}

const mutations = {
  addTask(state, payload) {
    state.pending.push(payload)
  },
  editTask(state, { item, index }) {
    state.pending.splice(index, 1, item)
  },
  deleteTask(state, item) {
    state.pending.splice(state.pending.indexOf(item), 1)
  },
  setTasks(state, payload) {
    state.pending = payload.pending
    state.done = payload.done
  }
}

const actions = {
  addTask({ commit }, task) {
    commit('addTask', task)
  },
  editTask({ commit }, { item, index }) {
    commit('editTask', { item, index })
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
