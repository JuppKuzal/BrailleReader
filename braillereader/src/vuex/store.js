import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        darkmode: false
    },
    mutations: {
        switchMode (state) {
            state.darkmode = !state.darkmode
        }
    },
})

export default store;