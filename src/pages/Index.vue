<template>
    <div @keypress.space.prevent
        :class="darkmode ? 'darkmodeDarkBackground darkmodeDarkText' : 'lightmodeLightBackground'"
        >
        <Menu />
        <Application />
        <Footer />
    </div>
</template>

<script>
import Menu from '../components/Menu'
import Application from '../components/Application'
import Footer from '../components/Footer'

export default {
    name: 'index',
    metaInfo: function() {
        return {
            title: 'The homepage of Braille Reader',
            titleTemplate: '%s',
            htmlAttrs: {
                lang: 'en-US'
            },
            meta: [
                { charset: 'utf-8' },
                { vmid:'description', name: 'description', content: 'An app to comfortably and quickly translate patterns from Braille to other languages. Come over and use it for free!' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ]
        }
    },
    components: {
        Menu,
        Application,
        Footer
    },
    title () {
        return 'Braille Reader: The quick interactive translation of the braille notation'
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
    /* Hide scrollbar for Chrome, Safari and Opera */
    @import '../main.scss'
</style>