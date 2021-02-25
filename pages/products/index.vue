<template>
  <Products/>
</template>

<script>
export default {
  name: "IndexProducts",
  components: {
    Products: () => import('@/components/sections/ProductsAll')
  },

  scrollToTop: true,
}
</script>

<style scoped>

</style>
