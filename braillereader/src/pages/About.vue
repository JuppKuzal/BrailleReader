<template>
    <div>
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
}
</script>

<style scoped>

</style>