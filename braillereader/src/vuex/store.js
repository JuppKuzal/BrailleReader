import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        darkmode: false,
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
        phoneWidthBorder: 600,
        smallPhoneWidthBorder: 400,
    },
    mutations: {
        switchMode (state) {
            state.darkmode = !state.darkmode
        }
    },
})

export default store;