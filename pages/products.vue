<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12">
        <v-breadcrumbs :items="getRoutes">
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item
              nuxt
              :to="item.to"
              exact
            >
              {{ item.text.toUpperCase() }}
            </v-breadcrumbs-item>
          </template>
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-col>
      <v-col cols="12">

        <!--        <Products/>-->

        <NuxtChild/>

      </v-col>
    </v-row>
  </section>
</template>

<script>
import products from "@/myStore/products";

export default {
  name: "ProductsPage",
  data: () => ({
    products: products.products,
    items: [

    ],
  }),
  computed: {
    getRoutes() {
      let routes = [{
        to: '/products',
        link: true,
        // name: 'products',
        text: 'Продукция',
      }]

      const currentProduct = this.products.find( product => product.slug === this.$route.params.slug)
      if (currentProduct) {
        const currentRoute = {
          to: this.$route.path,
          link: true,
          text: currentProduct.title,
        }
        routes.push(currentRoute)
      }
      return routes
    }
  }
}
</script>

<style scoped>

</style>
