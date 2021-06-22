<template>
    <v-app>
      <router-view />
    </v-app>
</template>

<script>
export default {
  name: 'App',
  metaInfo: function() {
    return {
      title: 'The homepage of The Braille Reader',
      titleTemplate: '%s',
      htmlAttrs: {
        lang: 'en-US'
      },
      meta: [
        { charset: 'utf-8' },
        { vmid:'description', name: 'description', content: 'An app to comfortably and quickly translate patterns from Braille to other languages. Come over and use it for free!' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
}
</script>

<style>
::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
}
</style>