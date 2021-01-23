<template>
    <div :class="{darkmode:darkmode, lightmodeLight: !darkmode}">
        <Menu />
        <About />
        <Footer />
        <div :class="darkmode ? 'footerExtensionDark' : 'footerExtensionLight'"></div>
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
            
        }
    },
    computed: {
        darkmode () {
            return this.$store.state.darkmode
        }
    },
}
</script>

<style scoped>
    .darkmode {
        background-color: #181818;
        color: #B3B3B3;
    }
    .darkmodeLight {
        background-color: #404040;
        color: #B3B3B3;
    }
    .lightmodeGrey {
        background-color: #B3B3B3;
    }
    .lightmodeLight {
        background-color: #f0e5e5;
    }
    .footerExtensionDark {
        width: 100%;
        height: 5vh;
        background-color: #404040;
    }
    .footerExtensionLight {
        width: 100%;
        height: 5vh;
        background-color: #B3B3B3;
    }
</style>