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
    HomeAppBar: () => import('~/components/core/AppBar.vue'),
    HomeFooter: () => import('~/components/core/Footer'),
    ProductsBar: () => import('~/components/core/AppProductsBar'),
  }
}
</script>

<style scoped>

</style>
