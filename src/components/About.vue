<template>
    <v-container>
    <div :class="darkmode? 'darkmodeDarkBackground darkmodeDarkText': ''">
        <div class="text-h5 ma-2 my-4 pa-2">
            How to use
        </div>
        <blockquote class="text-body-1 ma-2 pa-2">
            <v-alert type="info" :color="darkmode ? 'grey darken-3' : ''">
            To input text, use the numbers 1, 2, 4, 5, 7 and 8 on your numerical keyboard, as this grid resembles the braille grid. <br />
            You can also click or tap the given card in the grid. <br />
            Each heightened dot represents a number. Finish both letters and words with space. Translated text will appear under the translated word.
            </v-alert>       
        </blockquote>
    
        <blockquote class="text-body-1 ma-2 pa-2">
            <img v-if="darkmode" src="@/assets/numGridDark.png" class="center">
            <img v-else src="@/assets/numGridLight.png" class="center">
        </blockquote>
        <div class="text-h5 ma-2 my-4 pa-2">
            Current limitations
        </div>
        <blockquote class="text-body-1 ma-2 pa-2">
            The translator doesn't work for all languages (because of their individual special characters). It does however work for all latin letters and Czech special characters, Czech being the 
            first implemented language (due to being Czech myself).
        </blockquote>
        <div class="text-h5 ma-2 my-4 pa-2">
            Updates in the future
        </div>
        <blockquote class="text-body-1 ma-2 pa-2">
            The project will be updated further in the future, like improving design and controls for mobile, as well as turning it to a Progressive Web App (PWA) and make it downloadable
            as an app directly to your phone, even offline. Support for multiple languages, dark mode and translation from text to Braille are also coming.
            If you had any remarks or suggestions regarding the current state or future development of this app, please let me know via contact listed in the footer.
        </blockquote>
        <div class="text-h5 ma-2 my-4 pa-2">
            Inspiration
        </div>
        <blockquote class="text-body-1 ma-2 pa-2">
            This website is a free-time project to help people to translate from Braille to standard text.
            The inspiration came from reading a magazine once, written only in braille. Not understanding it, I created a simple solution in Java.
            Having moved on to Javascript in the meantime, I decided to recreate it with a simple frontend UI and release it to the public, in case
            someone faced a similar issue as myself and was not satisfied with other Google results he has found.
        </blockquote>
        <div class="text-h5 ma-2 my-4 pa-2">
            Donate
        </div>
        <blockquote class="text-body-1 ma-2 pa-2">
            Since this project doesn't show any ads (because they only worsen the experience (and almost everyone is nowadays using AdBlock anyway)), I would be delighted if you tipped me 
            some <a href="https://nano.org/">NANO</a> in case you used it and liked it. 
        </blockquote>
        <blockquote class="text-body-1 ma-2 pa-2">
            My NANO Address:
        </blockquote>
        <blockquote v-if="windowWidth>phoneWidthBorder" class="text-body-1 px-2 mx-2 mb-2">
            nano_3f4zfaa8nqqk4t5ts571xxwjqr6asx8e7m3onigzwsu6tpqntqhqi9gwmct4
        </blockquote>
        <blockquote class="text-body-1 ma-2 pa-2 mb-12">
            <img v-if="darkmode" src="@/assets/braillenanoqrDark.png" class="center">
            <img v-else src="@/assets/braillenanoqrLight.png" class="center">
        </blockquote>
    </div>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            windowWidth: this.$store.state.windowWidth,
            windowHeight: this.$store.state.windowHeight,
            phoneWidthBorder: this.$store.state.phoneWidthBorder,
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