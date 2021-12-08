import { createStore } from 'vuex'

export default createStore({
  state: {
    player: null,
    current_time: 0
  },
  mutations: {
    updateCurrentTime (state, value) {
      state.current_time = value
    },
    updatePlayer (state, player) {
      state.player = player
    }  
  },
  actions: {
  },
  modules: {
  }
})
