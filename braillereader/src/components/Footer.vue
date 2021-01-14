<template>
    <div :class="{ darkmodeLight: darkmode}">
    <v-row justify="center">
    <v-footer padless width="80%">
        <v-card
        flat
        tile
        width="100%"
        class="text-center"
        :color="darkmode ? '#404040' : 'white'">
        <v-layout grow row justify-center wrap align-center flex>
            <v-card-text>
                <v-btn
                v-for="[i, link] in icons"
                :key="i"
                class="mx-4"
                icon
                :href=link target="_blank"
                :color="darkmode ? '#B3B3B3' : ''"
                >
                    <v-icon size="24px">
                        {{i}}
                    </v-icon>
                </v-btn>
            </v-card-text>
            <v-card-text class="mt-n7 footer-text">
                <div :class="{darkmodeText: darkmode}">
                    Feel free to contact me about your inquiries regarding this website. All of your messages are read and taken into consideration.
                </div>
            </v-card-text>
            <v-card-text class="my-n7 footer-text">
                <div :class="{darkmodeText: darkmode}">
                    I have planned some further upgrades to the page to add in the future, you can gladly follow the development activity over at this <a href="https://github.com/JuppKuzal/BrailleReader/tree/master/braillereader">link</a> and drop a comment with your thoughts!
                </div>
            </v-card-text>
            <v-card-text class="mb-n4 footer-text">
                <div :class="{darkmodeText: darkmode}">
                    Also, check out other projects I've worked on on my Github or Gitlab account!
                </div>
            </v-card-text>
            <v-divider inset class="mr-16"/>
            <v-card-text class="mt-n2">
                <div :class="{copyrightdarkmodeText: darkmode}">
                    {{ new Date().getFullYear() }} - <strong>BrailleReader</strong>
                </div> 
            </v-card-text>
        </v-layout>
        </v-card>
    </v-footer>
    </v-row>
    </div>
</template>

<script>
export default {
    data: () => ({
        icons: [
            ['mdi-email', "mailto:pepa.kousal@gmail.com"],
            ['mdi-github', "https://github.com/JuppKuzal"],
            ['mdi-gitlab', "https://gitlab.com/JuppKuzal"]
        ],
    }),
    computed: {
        darkmode () {
            return this.$store.state.darkmode
        }
    },
}
</script>

<style>
    .footer-text {
        font-size: 12px;
    }
    a {
        color: #404040;
        text-decoration: none;
    }

    .darkmode {
        background-color: #181818;
    }

    .darkmodeText {
        color: #B3B3B3;
    }

    .copyrightdarkmodeText { 
        color: white;
    }
    .v-divider {
        border-color:#B3B3B3 !important;
        width: 100%; 
    }
</style>