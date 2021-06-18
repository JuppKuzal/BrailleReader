<template>
    <div :class="darkmode ? 'darkmodeDarkBackground darkmodeDarkText' : 'lightmodeLightBackground'" class="example">
        <Menu />
        <About />
        <Footer />
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
    title () {
        return 'About BrailleReader'
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

<style lang="scss" scoped>
    @import '../main.scss'
</style>