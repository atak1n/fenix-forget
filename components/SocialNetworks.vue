<template>
  <base-info-card title="Мы в социальных сетях">
    <v-row dense>
      <v-col cols="auto">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <base-btn-social
                x-large
                :color="lightTheme ? 'grey--text' : 'white' "
                v-on="on"
                :href="getHref(viber)"
            >
              <v-img
                  :src="require(`@/assets/${ lightTheme ? viberIcon.grey : viberIcon.white }`)"
                  contain
                  height="32"
                  max-width="32"
              />
            </base-btn-social>
          </template>
          <span>{{ viber.title }}</span>
        </v-tooltip>
      </v-col>

      <v-col
          v-for="(social, i) in socials"
          :key="i"
          cols="auto"
      >
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <base-btn-social
                x-large
                :icon="social.icon"
                :color="lightTheme ? 'grey--text' : 'white' "
                :href="getHref(social)"
                v-on="on"
            />
          </template>
          <span>{{ social.title }}</span>
        </v-tooltip>

      </v-col>
    </v-row>
  </base-info-card>
</template>

<script>
  import contacts from "~/myStore/contacts";

  export default {
    name: "SocialNetworks",
    props: {
      lightTheme: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      socials: [
        contacts.whatsapp,
        contacts.telegram,
        contacts.instagram,
        contacts.vk,
        contacts.profi,
      ],
      viber: contacts.viber,
      viberIcon: {
        white: 'viber-light.svg',
        grey: 'viber-grey.svg'
      }
    }),
    methods: {
      getHref(contact) {
        return `${contact.href}${contact.link}`
      }
    }
  }
</script>

<style scoped>

</style>
