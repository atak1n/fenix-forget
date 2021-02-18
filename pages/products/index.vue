<template>
  <Products/>
</template>

<script>
export default {
  name: "IndexProducts",
  components: {
    Products: () => import('@/components/sections/ProductsAll')
  }
}
</script>

<style scoped>

</style>
