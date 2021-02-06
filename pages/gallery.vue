<template>
  <section id="gallery">
    <v-row no-gutters>
      <v-col cols="12">
        <images-grid />
      </v-col>
    </v-row>
  </section>
</template>

<script>
  import pages from "~/myStore/pages"

  export default {
    name: "galley",
    components:{
      ImagesGrid: () => import('~/components/sections/ImagesGrid.vue'),
    },

    scrollToTop: true,

    head: { ...pages.gallery }
  }
</script>

<style scoped>

</style>
