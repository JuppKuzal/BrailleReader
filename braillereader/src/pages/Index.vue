<template>
    <div @keypress.space.prevent>
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
}
</script>