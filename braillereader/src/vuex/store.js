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

        colors: {
            lightModeLighterColor: '#f0e5e5',
            lightModeDarkerColor: '#B3B3B3',

            darkModeLighterColor: '#404040',
            darkModeDarkerColor: '#181818',

            disabledTextColor: '#525252',
            
            cardGreen: 'rgb(64,64,64)',


        }
    },
    mutations: {
        switchMode (state) {
            state.darkmode = !state.darkmode
        }
    },
})

export default store;