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
                label="Типы навесов:"
                solo
            />


          </v-col>
        </v-row>
        <transition name="fade" mode="out-in">
          <v-row justify="center" class="align-content-sm-center" :key="activeGroup">
            <v-col
                md="4"
                v-for="(project, i) in imgsGroup"
                :key="project.img.preview"
                class="flex-grow-0"
            >

              <base-gallery-card
                  :value="project"
                  :width=400
                  @click="openCard(i)"
                  :key="project.img.preview"
              />

            </v-col>
          </v-row>
        </transition>
        <v-dialog v-model="dialog"
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
                v-for="(project, i) in imgsGroup"
                :key="i"
                :src="require(`@/assets/${project.img.original}`)"
                contain
            >
              <v-btn
                  color="transparent"
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
      projects: store.projects.types,
      groups: ['Все варианты'],
      title: 'Title',
      author: 'author',
      activeCard: '',

      activeGroup: 'Все варианты',

    }),
    methods: {
      openCard(i) {
        this.activeCard = i
        this.dialog = true
      },
      setProjectsGroups() {
        this.projects.forEach(
          project => this.groups.push(project.title)
        )
      },
    },

    computed: {
      mobile() {
        return this.$vuetify.breakpoint.mobile
      },
      imgsGroup() {
        if (this.activeGroup === 'Все варианты') return this.gallery.images

        const imgs = this.gallery.images.filter(
          img => img.title === this.activeGroup
        )
        return imgs
      }
    },
    created() {
      this.setProjectsGroups()
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

/*  .slide-fade-enter-active {*/
/*  transition: all 2.5s ease;*/
/*}*/
/*.slide-fade-leave-active {*/
/*  transition: all .5s ease;*/
/*}*/
/*.slide-fade-enter, .slide-fade-leave-to*/
/*!* .slide-fade-leave-active below version 2.1.8 *! {*/
/*  transform: translateX(30px);*/
/*  opacity: 0;*/
/*}*/

</style>
