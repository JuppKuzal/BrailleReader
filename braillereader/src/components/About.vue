<template>
    <div :class="{ darkmode: darkmode }">
        <div class="text-h5 ma-2 my-4 pa-2">
            How to use
        </div>
        <blockquote class="text-body-1 ma-2 pa-2">
            <v-alert type="info" color="grey darken-3">
            To input text, use the numbers 1, 2, 4, 5, 7 and 8 on your numerical keyboard, as this grid resembles the braille grid. 
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
            Since this project doesn't make any money from ads (because they only worsen the experience (and almost everyone is nowadays using AdBlock anyway)), I would be delighted if you tipped me 
            some <a href="https://nano.org/">NANO</a> in case you used it and liked it. 
        </blockquote>
        <blockquote class="text-body-1 ma-2 pa-2">
            My NANO Address: nano_3f4zfaa8nqqk4t5ts571xxwjqr6asx8e7m3onigzwsu6tpqntqhqi9gwmct4
        </blockquote>
        <blockquote class="text-body-1 ma-2 pa-2 mb-12">
            <img v-if="darkmode" src="@/assets/braillenanoqrDark.png" class="center">
            <img v-else src="@/assets/braillenanoqrLight.png" class="center">
        </blockquote>
    </div>
</template>

<script>
export default {
    data () {
        return {
            darkmode: true,
        }
    }
}
</script>

<style scoped>
    .center{
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    a {
        color: #404040;
        text-decoration: none;
    }

    .darkmode {
        background-color: #181818;
        color: #B3B3B3;
    }
</style>