<template>
    <div @keypress.space.prevent>
        <Menu />
        <Application />
        <v-row justify="center">
        <Footer />
        </v-row>
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
    methods: {
        mtd () {
            alert('1')
        }
    },
}
</script>