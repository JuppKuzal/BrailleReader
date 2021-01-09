<template>
    <div>
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