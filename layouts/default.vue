<template>
  <v-app>

    <home-app-bar />

    <ProductsBar />

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
    ProductsBar: () => import('~/components/home/AppProductsBar'),
  }
}
</script>

<style scoped>

</style>
