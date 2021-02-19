<template>
  <base-section space="44" id="products-all">
    <base-section-heading
      :title="title"
      :text="annotate"
    />
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <transition name="fade" mode="out-in">
          <v-row>

            <template v-for="product in products">

              <v-col
                :key="product.title"
                class="mt-2"
                cols="12"
              >
<!--                <NuxtLink :to="`${$route.path}/${product.slug}/`">-->
                <NuxtLink :to="{ name: 'products-slug', params: { slug: product.slug } }">
                  <strong> {{ product.title }}</strong>
                </NuxtLink>
              </v-col>

              <v-col
                v-for="(type,j) in product.types"
                :key="`${product.title}${j}`"
                cols="6"
                md="3"
                sm="2"
              >
                <base-gallery-card
                  v-bind="type"
                  :title="false"
                  :width="mobile ? 400 : 300"
                />
              </v-col>

            </template>

          </v-row>
        </transition>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>

import products from "@/myStore/products";


export default {
  name: "Products",
  data: () => ({
    title: products.title,
    annotate: products.annotate,
    products: products.products,
  }),
  computed: {
    goToProduct(slug) {
      return `${this.$route.path}/${slug}`
    },
    mobile() {
      return this.$vuetify.breakpoint.mobile
    },
  },

}
</script>

<style scoped>

</style>
