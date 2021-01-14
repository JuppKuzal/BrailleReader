<template>
        <v-card
        elevation="2"
        width="100%"
        class="pa-4"
        :class="{darkmodeLight: darkmode}"
        >
        <v-layout justify-space-between>
            <a href="/#/">
                <img v-if="darkmode" src="@/assets/iconDark.png" width="48px" height="100%" class="ml-16" title="BrailleReader">
                <img v-else src="@/assets/icon.svg" width="48px" height="100%" class="ml-16" title="BrailleReader">
            </a>
            <v-card-title class="my-n3 text-sm-h4 text-xl-h2">
                <a href="/#/">
                    <div :class="darkmode ? 'whitetitle' : 'darktitle'">
                        Braille Reader
                    </div>
                </a>
            </v-card-title>
                <v-btn 
                class="mx-4" 
                text
                href="/#/about"
                height="54px"
                title="What is this page?"
                >
                    <div :class="darkmode ? 'whitetitle' : 'darktitle'">
                        About
                    </div>
                </v-btn>
                <v-btn
                class="mx-4"
                icon
                rounded
                height="54px"
                @click="toggleDarkMode"
                :title="darkmode ? 'Lights on!' : 'Lights out!'">
                    <v-icon v-if="darkmode" style="color: white;">
                        mdi-white-balance-sunny
                    </v-icon>
                    <v-icon v-else>
                        mdi-moon-waning-crescent
                    </v-icon>
                </v-btn>
        </v-layout>
        </v-card>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    computed: {
        darkmode () {
            return this.$store.state.darkmode
        }
    },
    methods: {
        toggleDarkMode () {
            this.$store.commit('switchMode')
            console.log(this.$store.state.darkmode)
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
    .darkmodeLight {
        background-color: #404040;
        color: #B3B3B3;
    }
</style>