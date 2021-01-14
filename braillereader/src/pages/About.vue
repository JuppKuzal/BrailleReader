<template>
    <div :class="{darkmode:darkmode}">
        <Menu :darkmode="darkmode" @clicked="updateDarkMode" />
        <About :darkmode="darkmode" />
        <Footer :darkmode="darkmode" />
    </div>
</template>

<script>
import Menu from '../components/Menu'
import About from '../components/About'
import Footer from '../components/Footer'

export default {
    name: 'about',
    components: {
        Menu,
        About,
        Footer
    },
    data () {
        return {
            darkmode: false,
        }
    },
    methods: {
        updateDarkMode (darkmodeSetting) {
            this.darkmode = darkmodeSetting
        }
    }
}
</script>

<style scoped>
    .darkmode {
        background-color: #181818;
        color: #B3B3B3;
    }
</style>