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
          <v-row>
<!--            <v-col-->
<!--              class="mt-2"-->
<!--              cols="12"-->
<!--            >-->
<!--              <strong> {{ product.title }}</strong>-->
<!--            </v-col>-->

            <v-col
              cols="6" md="2"
              v-for="type in product.types"
              :key="type.name">

              <v-item v-slot="{ toggle }">

                <base-gallery-card
                  :value="type"
                  :width=400
                  :height="150"
                  @click="toggle"
                />
                <!--                <span>{{type.name}}</span>-->

              </v-item>

            </v-col>
          </v-row>
          <transition name="fade" mode="out-in">
            <v-row v-if="activeType !== undefined">

              <v-col
                class="mt-2"
                cols="12"
              >
                <strong> {{ activeType.name }}</strong>
              </v-col>

              <v-col
                cols="6" md="2"
                v-for="product in activeType.products"
                :key="product.id"
              >
                <base-gallery-card
                  :width=400
                  :height="150"
                  :value="product"
                  :title='false'
                />
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
    }
  },

}
</script>

<style scoped>

</style>
