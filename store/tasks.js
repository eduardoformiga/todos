import { getTasks } from '../services/task.service'

const state = () => ({
  pending: [],
  done: [],
  globalEditMode: false
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
  toggleGlobalEditMode(state) {
    state.globalEditMode = !state.globalEditMode
  },
  deleteTask(state, payload) {
    state.pending.splice(state.pending.indexOf(payload), 1)
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
  editTask({ commit }, { text, index }) {
    commit('editTask', { text, index })
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
