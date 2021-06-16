<template>
    <div @keypress.space.prevent
        :class="darkmode ? 'darkmodeDarkBackground darkmodeDarkText' : 'lightmodeLightBackground'"
        >
        <Menu />
        <Application />
        <Footer />
        <div class="footerExtension" :class="darkmode ? 'darkmodeLightBackground' : 'lightmodeDarkBackground'"></div>
    </div>
</template>

<script>
import Menu from '../components/Menu'
import Application from '../components/Application'
import Footer from '../components/Footer'

export default {
    name: 'index',
    components: {
        Menu,
        Application,
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

<style lang="scss" scoped>
    /* Dodelat tyhle color variables u vsech classes (je to jenom tady zatim), pak commit */
    /* Jinak improvenout code quality a readibility, shits awful */

    @import '../main.scss'
</style>