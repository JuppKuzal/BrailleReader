<template>
    <div :class="darkmode? 'darkmodeLightBackground darkmodeDarkText': 'lightmodeDarkBackground'">
    <v-row justify="center">
    <v-spacer>
    </v-spacer>
    <v-footer padless width="100%">
        <v-card
        flat
        tile
        width="100%"
        class="text-center py-6"
        :class="darkmode ? 'darkmodeLightBackground darkmodeLightText' : 'darkmodeLightText lightmodeDarkBackground'">
        <v-layout grow row justify-center wrap align-center flex class="mx-2">
            <v-card-text>
                <v-btn
                v-for="[i, link, desc] in icons"
                :key="i"
                class="mx-4"
                icon
                :href=link target="_blank" rel="noreferrer"
                :class="darkmode ? 'darkmodeDarkText' : ''"
                :aria-label=desc
                >
                    <v-icon size="24px">
                        {{i}}
                    </v-icon>
                </v-btn>
            </v-card-text>
            <v-card-text class="mt-n7 footer-text">
                <div :class=" darkmode ? 'darkmodeDarkText' : ''">
                    Feel free to contact me about your inquiries regarding this website. All of your messages are read and taken into consideration.
                </div>
            </v-card-text>
            <v-card-text class="my-n7 footer-text">
                <div :class=" darkmode ? 'darkmodeDarkText' : ''">
                    I have planned some further upgrades to the page to add in the future, you can gladly follow the development activity over at <a href="https://github.com/JuppKuzal/BrailleReader/tree/master/braillereader" rel="noreferrer" :style="darkmode ? 'color:white;':'color:black;'">this link</a> and drop a comment with your thoughts!
                </div>
            </v-card-text>
            <v-card-text class="mb-n4 footer-text">
                <div :class=" darkmode ? 'darkmodeDarkText' : ''">
                    Also, check out other projects I've worked on on my Github or Gitlab account!
                </div>
            </v-card-text>
            <v-divider inset class="mr-16"/>
            <v-card-text class="mt-n2">
                <div :class="darkmode ? 'whiteText' : ''">
                    {{ new Date().getFullYear() }} - <strong>BrailleReader</strong>
                </div> 
            </v-card-text>
        </v-layout>
        </v-card>
    </v-footer>
    <v-spacer>
    </v-spacer>
    </v-row>
    </div>
</template>

<script>
import {
    mdiEmail,
    mdiGithub,
    mdiGitlab
} from '@mdi/js'

export default {
    data: () => ({
        icons: [
            [mdiEmail, "mailto:pepa.kousal@gmail.com", "Contact me via E-mail!"],
            [mdiGithub, "https://github.com/JuppKuzal", "Look at my other projects on Github!"],
            [mdiGitlab, "https://gitlab.com/JuppKuzal", "Look at my other projects on Gitlab!"]
        ],
    }),
    computed: {
        darkmode () {
            return this.$store.state.darkmode
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '../main.scss';
</style>