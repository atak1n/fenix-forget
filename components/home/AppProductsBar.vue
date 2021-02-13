<template>

  <v-navigation-drawer
    v-model="drawer"
    app
    clipped
    floating
    color="#212121"
    dark
    style="max-height: 100%"
  >
<!--<div :style="topOffset">-->


    <v-list-item nav>
      <v-list-item-icon>
        <v-icon>mdi-check-decagram</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Товары</v-list-item-title>
<!--      <v-btn-->
<!--        icon-->
<!--        @click.stop="mini = !mini"-->
<!--      >-->
<!--        <v-icon>mdi-chevron-left</v-icon>-->
<!--      </v-btn>-->
    </v-list-item>

    <v-divider/>

    <v-list dense nav>
      <v-list-item
        v-for="product in products" :key="product.title"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ product.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ product.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

    </v-list>
    <v-list-item style="height: 124px" />

<!--</div>-->

  </v-navigation-drawer>

</template>

<script>
import products from "@/myStore/products";

export default {
  name: "AppProductsBar",
  data: () => ({
    drawer: null,
    mini: true,

    title: products.title,
    annotate: products.annotate,
    products: products.products,

  }),
  computed: {
    bottomOffset() {
       return `height: ${this.$vuetify.application.bottom}px; position: fixed`
    }
  }
}
</script>

<style scoped>

</style>
