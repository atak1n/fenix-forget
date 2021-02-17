<template>
  <base-section id="products">
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

            <template v-for="(product, n) in products">

              <v-col
                :key="n"
                class="mt-2"
                cols="12"
              >
                <strong> {{ product.title }}</strong>
              </v-col>

              <v-col
                v-for="type in product.types"
                :key="`${n}${type.slug}`"
                cols="6"
                md="2"
              >
                <base-gallery-card
                  :value="type"
                  :width=400
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

}
</script>

<style scoped>

</style>
