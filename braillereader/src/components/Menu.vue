<template>
        <v-card
        elevation="2"
        width="100%"
        class="pa-4"
        :class="{darkmode: darkmode}"
        >
        <v-layout justify-space-between>
            <a href="/">
                <img v-if="darkmode" src="@/assets/iconDark.png" width="48px" height="100%" class="ml-16" title="BrailleReader">
                <img v-else src="@/assets/icon.svg" width="48px" height="100%" class="ml-16" title="BrailleReader">
            </a>
            <v-card-title class="my-n3 text-sm-h4 text-xl-h2">
                <a href="/">
                    <div :class="darkmode ? 'whitetitle' : 'darktitle'">
                        Braille Reader
                    </div>
                </a>
            </v-card-title>
                <v-btn 
                class="mr-16" 
                text
                href="/#/about"
                height="54px"
                title="What is this page?"
                >
                    <div :class="darkmode ? 'whitetitle' : 'darktitle'">
                        About
                    </div>
                </v-btn>
        </v-layout>
        </v-card>
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

<style>
    .darktitle {
        color: #212121;
    }
    .whitetitle {
        color: #FFFFFF;
    }
    .darkmode {
        background-color: #181818;
        color: #B3B3B3;
    }
</style>