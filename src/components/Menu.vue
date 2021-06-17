<template>
        <v-card
        elevation="2"
        width="100%"
        class="pa-4"
        :class="darkmode? 'darkmodeLightBackground darkmodeDarkText': 'lightmodeDarkBackground'"
        >
        <v-layout row justify-center justify-space-between>
            <router-link to="/" v-if="windowWidth>smallPhoneWidthBorder">
                <img src="@/assets/icon.svg" width="48px" height="100%" title="BrailleReader" :class="windowWidth>800 ? 'ml-16' : ''">
            </router-link>
            <v-spacer />
            <v-card-title class="my-n3 text-sm-h4 text-xl-h2">
                <router-link to="/">
                    <div :class="darkmode ? 'whiteText' : 'darktitle'">
                        Braille Reader
                    </div>
                </router-link>
            </v-card-title>
            <v-spacer />
            <router-link to="/about">
                <v-btn
                v-if="windowWidth>phoneWidthBorder"
                text
                height="54px"
                title="What is this page?"
                >
                    <div :class="darkmode ? 'whiteText' : 'darktitle'">
                        About
                    </div>
                </v-btn>
                <v-btn
                v-else
                icon
                height="54px"
                title="What is this page?"
                >
                    <v-icon :color="darkmode ? 'white' : ''">
                        mdi-help
                    </v-icon>
                </v-btn>
            </router-link>
                <v-btn
                class="mx-4"
                icon
                rounded
                height="54px"
                @click="toggleDarkMode"
                :title="darkmode ? 'Lights on!' : 'Lights out!'">
                    <v-icon v-if="darkmode" class="whiteText">
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
            windowWidth: this.$store.state.windowWidth,
            windowHeight: this.$store.state.windowHeight,
            phoneWidthBorder: this.$store.state.phoneWidthBorder,
            smallPhoneWidthBorder: this.$store.state.smallPhoneWidthBorder
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
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../main.scss'
</style>