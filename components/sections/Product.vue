<template>
  <base-section space="44" id="product">
    <base-section-heading
      :title="product.title"
      :text="annotate"
    />
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >

      <v-container fluid>
        <!--        <transition name="fade" mode="out-in">-->
        <v-item-group mandatory v-model="selectedGroup">
          <v-row dense>

            <v-col
              cols="6" md="2"
              v-for="type in product.types"
              :key="type.name">
              <v-item v-slot="{ active ,toggle }">

                <base-product-img-card
                  :value="type"
                  :width=400
                  :height="150"
                  @click="toggle"
                  subtitle
                  :dark="active"
                />

              </v-item>
            </v-col>

          </v-row>
          <transition name="fade" mode="out-in">
            <v-row v-if="activeType !== undefined" :dense="mobile">

              <v-col
                cols="12"
              >
                <base-title > {{ activeType.title }}</base-title>
              </v-col>

              <v-col
                cols="12" md="3"
                v-for="(product,n) in activeType.products"
                :key="n"
              >
                <base-gallery-card
                  :width="mobile ? 400 : 300"
                  v-bind="product"
                  :title="(n+1).toString()"
                >
                  <template v-slot:imgText>{{ n }}</template>
                </base-gallery-card>
              </v-col>
            </v-row>
          </transition>
        </v-item-group>
        <!--        </transition>-->
      </v-container>

    </v-responsive>
  </base-section>
</template>

<script>
import products from "@/myStore/products";


export default {
  name: "Product",
  // props: {
  //   slug: {
  //     type: String,
  //   }
  // },
  data: () => ({
    title: products.title,
    annotate: products.annotate,
    products: products.products,

    selectedGroup: '',
  }),
  computed: {
    product() {
      const product = this.products.find( product => product.slug === this.$route.params.slug)
      this.selectedGroup = ''
      return product
    },
    activeType() {
      if (this.selectedGroup !== '') {
        return this.product.types[this.selectedGroup]
      }
      return undefined
    },
    mobile() {
      return this.$vuetify.breakpoint.mobile
    },
  },

}
</script>

<style scoped>

</style>
