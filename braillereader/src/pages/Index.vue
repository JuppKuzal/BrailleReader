<template>
    <v-container style="max-height: 100%;" @keypress.space.prevent>
        <Menu />
        <Application />
        <v-row justify="center">
        <Footer />
        </v-row>
    </v-container>
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