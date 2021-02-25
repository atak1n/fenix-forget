<template>
  <base-section id="projects">
    <base-section-heading :title="title">{{ annotate }}</base-section-heading>
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <v-row justify="center">
          <v-col
            cols="12"
            md="3"
            sm="6"
            v-for="(project, i) in projects"
            :key="i"

          >
            <base-gallery-card
              v-bind="project"
              :width="mobile ? 400 : 300"
              @click="openCard(project)"
            />
          </v-col>

          <v-dialog
            v-model="dialog"
            max-width="1000"
            max-height="750"
          >
            <!--            v-model="activeCard"-->
            <v-carousel
              hide-delimiters
            >
              <v-carousel-item
                v-for="(project, i) in activeGroup"
                :key="i"
                :src="require(`@/assets/${project.img.original}`)"
                contain

              >
                <v-btn
                  fab
                  absolute
                  text
                  right
                  small
                  class="primary--text"
                  @click="dialog = false"
                >
                  <v-icon large>mdi-close-circle-outline</v-icon>
                </v-btn>
              </v-carousel-item>
            </v-carousel>
          </v-dialog>
        </v-row>
        <v-row justify="center" >
          <v-col class="flex-grow-0">
            <base-btn outlined nuxt :to="{ name: 'gallery' }">больше фото в галерее</base-btn>
          </v-col>
        </v-row>

      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
import store from "~/myStore"

export default {
  name: "SectionProjects",
  data: () => ({
    dialog: false,
    annotate: store.projects.annotate,
    title: store.projects.title,
    projects: [],
    products: store.products.products,
    gallery: store.gallery.images,

    activeGroup: [],

  }),
  methods: {
    openCard(project) {
      this.setActiveGroupItems(project)
      this.dialog = true
    },
    setActiveGroupItems(project) {
      const products = []
      project.types.forEach( product => products.push(...product.products) )
      this.activeGroup = products
    },
  },

  computed: {
    mobile() {
      return this.$vuetify.breakpoint.mobile
    },
    // imgsGroup() {
    //   return this.gallery.filter(
    //     img => img.title === this.activeGroup.title
    //   )
    // },

  },
  created() {
    this.projects = this.products.filter(
      product => store.projects.products.find(
        projectsProduct => projectsProduct === product.slug
      )
    )
  }
}
</script>

<style scoped>

</style>
