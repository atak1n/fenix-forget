<template>
  <div>
    <v-app-bar
      id="home-app-bar"
      app
      clipped-left
      color="white"
      elevation="1"
      extension-height="28"
    >
      <base-img
        :src="require('@/assets/egg-logo.png')"
        contain
        max-width="60"
        class="mr-3 v-card--link"
        @click="$vuetify.goTo(0)"
        alt="вверх страницы"
      />
      <!--      <v-app-bar-nav-icon class="ml-3">-->
      <!--        <v-icon color="primary" x-large>mdi-shield-half-full</v-icon>-->
      <!--      </v-app-bar-nav-icon>-->

      <v-toolbar-title class=" v-card--link" @click="$router.push({path: '/'})">
        {{ companyName }}
      </v-toolbar-title>
      <v-spacer />
      <v-btn class="hidden-sm-and-down text-h5"
             :href="'tel:'+ phone"
             text
             x-large
      >
        {{ phone }}
      </v-btn>

      <v-spacer />

      <div>

        <v-tabs
          class="hidden-sm-and-down"
          optional
        >
          <v-tab
            v-for="(item, i) in items"
            :key="i"
            nuxt
            :to="item.path"
            :exact="item.name === 'index'"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text
            v-html="item.alias"
          />
        </v-tabs>
      </div>

      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      />

      <template v-slot:extension>

        <v-btn class="body-1 ml-10"
               :href="'tel:'+ phone"
               text
               small
        >
<!--          <v-icon v-text="'mdi-phone'"/>-->
          {{ phone }}
        </v-btn>

        <v-btn
          :href="getHref(contacts.whatsapp)"
          small
          icon
          class="mr-1"
        >
          <v-icon color="green" v-text="contacts.whatsapp.icon"/>
        </v-btn>

        <v-btn
          :href="getHref(contacts.telegram)"
          small
          icon
          class="mr-2"
        >
          <v-icon color="blue darken-2" v-text="contacts.telegram.icon"/>
        </v-btn>

        <v-btn
          :href="getHref(contacts.viber)"
          small
          icon

        >
          <v-img
            :src="require('@/assets/viber-purple.svg')"
            contain
            height="24"
            max-width="24"
            color="red"
          />
        </v-btn>

      </template>

    </v-app-bar>

    <home-drawer
      v-model="drawer"
      :items="items"
    />
  </div>
</template>

<script>
import store from "@/myStore"

export default {
  name: 'HomeAppBar',

  components: {
    HomeDrawer: () => import('./Drawer'),
  },

  data: () => ({
    drawer: null,
    items: [
      {
        path: '/',
        name: 'index',
        alias: 'главная'
      },
      {
        path: '/gallery',
        name: 'gallery',
        alias: 'наши работы'
      },
      // {
      //   name: 'info-alt',
      //   alias: 'контакты2'
      // },
      {
        path: '/contact-us',
        name: 'contacts',
        alias: 'контакты'
      },
      // 'Home',
      // 'About',
      // 'Contact',
      // 'Pro',
    ],
    companyName: store.company.name,
    phone: store.contacts.phoneNumbers.main,
    contacts: {...store.contacts},

  }),
  methods: {
    getHref(contact) {
      return `${contact.href}${contact.link}`
    }
  }

}
</script>

<style lang="sass">
#home-app-bar
  .v-tabs-slider
    max-width: 24px
    margin: 0 auto

  .v-tab
    &::before
      display: none
</style>
