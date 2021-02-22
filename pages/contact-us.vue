<template>
  <section id="contacts">
    <v-row no-gutters>
      <v-col cols="12">
        <hero-alt />
      </v-col>
      <v-col cols="12">
        <keep-in-touch />
      </v-col>
      <v-col cols="12">
        <maps />
      </v-col>
    </v-row>
  </section>
</template>

<script>
  import pagesMeta from "@/myStore/pagesMeta"

  export default {
    name: "ContactUs",
    components:{
      HeroAlt: () => import('~/components/sections/HeroAlt.vue'),
      KeepInTouch: () => import('~/components/sections/KeepInTouch.vue'),
      Maps: () => import('~/components/sections/Map.vue'),
    },


    head: { ...pagesMeta.contacts }
  }
</script>

<style scoped>

</style>
