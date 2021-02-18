<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12">

<!--        <Products/>-->

        <NuxtChild/>

      </v-col>
    </v-row>
  </section>
</template>

<script>

export default {
  name: "ProductsPage",
  // components: {
  //   Products: () => import('@/components/sections/ProductsAll')
  // }
}
</script>

<style scoped>

</style>
