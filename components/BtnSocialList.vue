<template>
  <div>
    <v-btn
      :class="isMobile? 'text-body-1 ml-10' : 'text-h5 ml-10'"
      :href="'tel:'+ contacts.phoneNumbers.main"
      text
      :small="isMobile"
    >
      <!--          <v-icon v-text="'mdi-phone'"/>-->
      {{ contacts.phoneNumbers.main }}
    </v-btn>

    <v-btn
      :href="getHref(contacts.whatsapp)"
      :small="isMobile"
      icon
      class="mr-1"
    >
      <v-icon
        color="green"
        :size="isMobile ? 24 : 32"
        v-text="contacts.whatsapp.icon"
      />
    </v-btn>

    <v-btn
      :href="getHref(contacts.telegram)"
      :small="isMobile"
      icon
      class="mr-2"
    >
      <v-icon
        color="blue darken-2"
        :size="isMobile ? 24 : 32"
        v-text="contacts.telegram.icon"
      />
    </v-btn>

    <v-btn
      :href="getHref(contacts.viber)"
      :small="isMobile"
      icon
    >
      <v-img
        :src="require('assets/viber-purple.svg')"
        contain
        :height="isMobile ? 24 : 30"
        :width="isMobile ? 24 : 30"
      />
    </v-btn>
  </div>
</template>

<script>
import store from "@/myStore"

export default {
  name: "BtnSocialList",

  data: () => ({
    contacts: {...store.contacts},
  }),

  methods: {
    getHref(contact) {
      return `${contact.href}${contact.link}`
    }
  },

  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile
    }
  },


}
</script>

<style scoped>

</style>
