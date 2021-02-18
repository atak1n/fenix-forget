<template>
<!--    <v-card-->
<!--      v-bind="$attrs"-->
<!--      v-on="$listeners"-->
<!--      :height="height"-->
<!--      :width="width"-->

<!--    >&lt;!&ndash;      @click="$emit('click')"&ndash;&gt;-->
<!--      <v-img-->
<!--        :src="require(`@/assets/${value.img.preview}`)"-->
<!--        height="100%"-->
<!--        gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"-->
<!--        class="align-end"-->
<!--      >-->
<!--        <v-card-title class="text-right" v-if="title">{{ value.title }}</v-card-title>-->
<!--      </v-img>-->
<!--      <v-card-subtitle v-if="subtitle">-->
<!--        {{ value.title }}-->
<!--      </v-card-subtitle>-->
<!--    </v-card>-->
  <v-card
    v-bind="$attrs"
    v-on="$listeners"
    class="mx-auto"

>
<!--  <div class="pa-2">-->
    <v-img
      :src="require(`@/assets/${value.img.preview}`)"
      height="100%"
      class=""
    />
<!--</div>-->
    <v-card-subtitle class="text--lighten-3" v-text="value.title"/>
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
      default: false
    },
    subtitle: {
      type: Boolean,
      default: false
    }
  },


}
</script>

<style scoped>

</style>
