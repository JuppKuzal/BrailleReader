<template>
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
            <v-card-text class="mt-n4">
                Feel free to contact me about your inquiries regarding this website. All of your messages are read and taken into consideration to improve this website.
            </v-card-text>
            <v-card-text class="my-n4">
                I have planned some further upgrades to the page to add in the future, you can gladly follow the development activity over at this link and drop a comment with your thoughts!
            </v-card-text>
            <v-card-text class="my-n2">
                Also, check out other projects I've worked on on my Github or Gitlab account!
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
                {{ new Date().getFullYear() }} - <strong>BrailleReader</strong>
            </v-card-text>
        </v-layout>
        </v-card>
    </v-footer>
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
    
</style>