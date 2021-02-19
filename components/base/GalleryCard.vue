<template>
  <v-card
    :height="height"
    :width="width"
    flat
    tile
    dark
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-img v-if="img.preview"
      :src="require(`@/assets/${img.preview}`)"
      height="100%"
      gradient="rgba(0, 0, 0, .1), rgba(0, 0, 0, .1)"
      class="align-end"
    >
        <v-card-title class="text-right" v-if="title">
          {{ title }}
        </v-card-title>
    </v-img>

    <v-card-subtitle class="white--text" v-if="subtitle">
      {{ title }}
    </v-card-subtitle>
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
    // value: {
    //   type: Object,
    //   default: () => ({}),
    // },
    img: {
      type: Object,
    },

    title: {
      type: [Boolean, String] ,
      default: false
    },
    subtitle: {
      type: [Boolean, String] ,
      default: false
    }
  },


}
</script>

<style scoped>

</style>
