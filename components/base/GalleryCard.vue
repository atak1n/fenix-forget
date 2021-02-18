<template>
  <v-card
      :height="height"
      :width="width"
      flat
      tile
      dark
      v-bind="$attrs"
      v-on="$listeners"

  ><!--      @click="$emit('click')"-->
    <v-img
        :src="require(`@/assets/${value.img.preview}`)"
        height="100%"
        gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
        class="align-end"
    >
      <v-card-title class="text-right" v-if="title">{{ value.title }}</v-card-title>
    </v-img>
  </v-card>
</template>

<script>
  export default {
    name: "GalleryCard",

    props: {
      height: {
        type: [Number, String],
        // required: true,
        // default: 270
      },
      width: {
        type: [Number, String],
        default: 270
      },
      value: {
        type: Object,
        default: () => ({}),
      },
      title: {
        type: Boolean,
        default: true
      }
    },


  }
</script>

<style scoped>

</style>
