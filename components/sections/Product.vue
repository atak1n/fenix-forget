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
        <!--        <transition name="fade" mode="out-in">-->
        <v-item-group mandatory v-model="selectedGroup">
          <v-row>
            <v-col
              class="mt-2"
              cols="12"
            >
              <strong> {{ product.title }}</strong>
            </v-col>

            <v-col
              cols="6" md="2"
              v-for="type in product.types"
              :key="type.slug">

              <v-item
                v-slot="{ active, toggle }"
                :value="type"
              >

                <base-gallery-card
                  :value="type"
                  :width=400
                  @click="toggle"


                />
<!--                <span>{{type.name}}</span>-->

              </v-item>

            </v-col>
          </v-row>

          <v-row>

            <v-col
              class="mt-2"
              cols="12"
            >
              <strong> {{ selectedGroup.name }}</strong>
            </v-col>

            <v-col
              cols="6" md="2"
              v-for="product in selectedGroup.products"
              :key="product.id"
            >
              <base-gallery-card
                :value="product"
                :width=400
              />
            </v-col>
          </v-row>
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
      // console.log(this.$route)
      // console.log(this.slug)
      const product = this.products.find( product => product.slug === this.$route.params.slug)
      console.log(product)
      return product
    },
  }
}
</script>

<style scoped>

</style>
