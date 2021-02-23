<template>
  <base-section id="gallery">
    <base-section-heading
      :title="gallery.title"
      :text="gallery.annotate"
    />
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <v-row>
          <v-col cols="12" lg="3" xl="3" md="3">

            <v-select
              v-model="activeGroup"
              :items="groups"
              item-text="title"
              item-value="slug"
              label="Типы навесов:"
              solo
              @input="setActiveGroupItems"
            />


          </v-col>
        </v-row>

        <transition name="fade" mode="out-in">
          <v-row justify="center" class="align-content-sm-center" :key="activeGroup">

            <v-col
              md="4"
              v-for="(project, i) in paginatedData"
              :key="project.img.preview"
              class="flex-grow-0"
            >

              <base-gallery-card
                :img="project.img"
                :width=400
                @click="openCard(i)"
                :key="project.img.preview"
              />

            </v-col>

            <v-col cols="12">
              <v-pagination
                v-model="pageNumber"
                :length="pageCount"
                :total-visible="7"
              />
            </v-col>
          </v-row>
        </transition>
        <v-dialog
          v-model="dialog"
          max-width="1000"
          max-height="750"
          :fullscreen="mobile"
        >
          <v-carousel
            v-model="activeCard"
            hide-delimiters
            :class="mobile ? 'mt-16' : ''"
          >
            <v-carousel-item
              v-for="(project, i) in activeGroupItems"
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
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
import store from "~/myStore"

export default {
  name: "ImagesGrid",
  data: () => ({
    dialog: false,
    gallery: store.gallery,
    projects: store.products.products,
    groups: [
      {title:'Все работы', slug: 'all'},
    ],
    // title: 'Title',
    activeCard: '',

    activeGroup: 'all',
    activeGroupItems: [],

    pageNumber: 1,
    // size: 8,

  }),
  methods: {
    openCard(i) {
      this.activeCard = i
      this.dialog = true
    },
    setProjectsGroups() {
      // this.projects.forEach(
      //   project => this.groups.push(project.title)
      // )
      this.groups = [...this.groups,...this.projects]

    },

    setActiveGroupItems() {
      const products = []
      if (this.activeGroup === 'all') {
        this.projects.forEach(product => product.types.forEach(
          type => products.push(...type.products)
        ))
      } else {
        const items = this.projects.find(project => project.slug === this.activeGroup)
        items.types.forEach( product => products.push(...product.products) )
      }

      this.activeGroupItems = products
    },

  },

  computed: {
    mobile() {
      return this.$vuetify.breakpoint.mobile
    },
    pageCount() {
      return Math.ceil( this.activeGroupItems.length / this.size)
    },
    paginatedData() {
      const start = (this.pageNumber -1 ) * this.size
      const end = start + this.size
      return this.activeGroupItems.slice(start, end)
    },
    size() {
      return this.mobile ? 6 : 9
    }
    // imgsGroup() {
    //   if (this.activeGroup === 'Все варианты') {
    //     return this.gallery.images
    //   }
    //
    //   const imgs = this.gallery.images.filter(
    //     img => img.title === this.activeGroup
    //   )
    //   return imgs
    // }
  },
  created() {
    this.setProjectsGroups()
    this.setActiveGroupItems()
  }
}

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

</style>
