<template>
<section>
    <v-row no-gutters>
      <v-col cols="12">

        <Product/>

      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {

  name: "ProductDetail",
  components: {
    Product: () => import('~/components/sections/Product')
  }
}
</script>

<style scoped>

</style>
