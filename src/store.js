import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: "Hello"
  },
  mutations: {
    changeMsg(state){
      state.message = "Goodbye!"
    }
  },
  actions: {

  }
})
