<template>
  <div>
    <v-app-bar
        id="home-app-bar"
        app
        clipped-left
        color="white"
        elevation="1"
    >
      <!--      <base-img-->
      <!--        :src="require('@/assets/logo.svg')"-->
      <!--        class="mr-3 hidden-xs-only"-->
      <!--        contain-->
      <!--        max-width="52"-->
      <!--        width="100%"-->
      <!--      />-->

      <!--      <base-img-->
      <!--        :src="require('@/assets/zero-logo-light.svg')"-->
      <!--        contain-->
      <!--        max-width="128"-->
      <!--        width="100%"-->
      <!--      />-->

<!--      <base-img-->
<!--          :src="require('@/assets/phoenix-logo.svg')"-->
<!--          class="mr-3 hidden-xs-only"-->
<!--          contain-->
<!--          max-width="40"-->
<!--          width="100%"-->
<!--      />-->
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
      phone: store.contacts.phoneNumbers.main

    }),

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
