<template>
    <v-row justify="center">
    <v-footer padless width="80%">
        <v-card
        flat
        tile
        width="100%"
        class="text-center">
        <v-layout grow row justify-center wrap align-center flex>
            <v-card-text>
                <v-btn
                v-for="[i, link] in icons"
                :key="i"
                class="mx-4"
                icon
                :href=link target="_blank"
                >
                    <v-icon size="24px">
                        {{i}}
                    </v-icon>
                </v-btn>
            </v-card-text>
            <v-card-text class="mt-n7 footer-text">
                Feel free to contact me about your inquiries regarding this website. All of your messages are read and taken into consideration.
            </v-card-text>
            <v-card-text class="my-n7 footer-text">
                I have planned some further upgrades to the page to add in the future, you can gladly follow the development activity over at this <a href="https://github.com/JuppKuzal/BrailleReader/tree/master/braillereader">link</a> and drop a comment with your thoughts!
            </v-card-text>
            <v-card-text class="mb-n4 footer-text">
                Also, check out other projects I've worked on on my Github or Gitlab account!
            </v-card-text>
            <v-divider inset></v-divider>
            <v-card-text class="mt-n2">
                {{ new Date().getFullYear() }} - <strong>BrailleReader</strong>
            </v-card-text>
        </v-layout>
        </v-card>
    </v-footer>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        icons: [
            ['mdi-email', "mailto:pepa.kousal@gmail.com"],
            ['mdi-github', "https://github.com/JuppKuzal"],
            ['mdi-gitlab', "https://gitlab.com/JuppKuzal"]
        ],
    })
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
</style>