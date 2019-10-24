import { getTasks } from '../services/task.service'

const state = () => ({
  tasks: []
})

const getters = {
  tasks(state) {
    return state.tasks
  }
}

const mutations = {
  setTasks(state, payload) {
    state.tasks = payload
  }
}

const actions = {
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
