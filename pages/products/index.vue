<template>
  <ProductsAll/>
</template>

<script>
import Products from "../../components/sections/ProductsGrid";
export default {
  name: "IndexProducts",
  components: {
    Products,
    ProductsAll: () => import('@/components/sections/ProductsAll')
  },

  scrollToTop: true,
}
</script>

<style scoped>

</style>
