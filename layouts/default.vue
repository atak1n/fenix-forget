<template>
  <v-app>
    <home-app-bar />
    <v-main>
      <v-fade-transition mode="out-in">
        <nuxt />
      </v-fade-transition>
    </v-main>
    <home-footer/>
  </v-app>
</template>

<script>
  export default {
    components: {
      HomeAppBar: () => import('~/components/home/AppBar.vue'),
      HomeFooter: () => import('~/components/home/Footer'),
    }
  }
</script>

<style scoped>

</style>
