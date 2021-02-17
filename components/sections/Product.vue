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

              <v-col
                class="mt-2"
                cols="12"
              >
                <strong> {{ product.title }}</strong>
              </v-col>

              <v-col
                v-for="type in product.types"
                :key="type.slug"
                cols="6"
                md="2"
              >
                <base-gallery-card
                  :value="type"
                  :width=400
                />
              </v-col>

          </v-row>
        </transition>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
import products from "@/myStore/products";


export default {
  name: "Product",
  props: {
    productSlug: {
      type: String,
    }
  },
  data: () => ({

    products: products.products,
  }),
  computed: {
    product() {
      return this.products.find( product => product.slug === this.productSlug)
    },
  }
}
</script>

<style scoped>

</style>
