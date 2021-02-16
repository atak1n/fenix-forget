<template>
  <div>
    <v-app-bar
        id="home-app-bar"
        app
        color="white"
        shrink-on-scroll
        fade-img-on-scroll
        prominent
        :src="require('@/assets/home_hero_2.jpg')"
    >
      <template v-slot:img="{ props}">
        <v-img
          v-bind="props"
          gradient="180deg, rgba(2,0,36,1) 0%, rgba(255,192,0,0.6334733722590599) 0%, rgba(244,81,30,1) 100%, rgba(55,55,145,1) 100%"
        />
      </template>

<!--      <base-img-->
<!--          :src="require('@/assets/egg-logo.png')"-->
<!--          contain-->
<!--          max-width="60"-->
<!--          width="100%"-->
<!--          class="mr-3 v-card&#45;&#45;link"-->
<!--          @click="$vuetify.goTo(0)"-->
<!--          alt="вверх страницы"-->
<!--      />-->
<!--      <v-app-bar-nav-icon class="ml-3">-->
<!--        <v-icon color="primary" x-large>mdi-shield-half-full</v-icon>-->
<!--      </v-app-bar-nav-icon>-->

      <v-app-bar-title-title class=" v-card--link" @click="$router.push({path: '/'})">
          {{ companyName }}
      </v-app-bar-title-title>

      <v-spacer />

      <v-btn class="hidden-sm-and-down "
             :href="'tel:'+ phone"
             text

      >
        {{ phone }}
      </v-btn>

      <v-spacer />



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


<!--      <v-app-bar-nav-icon-->
<!--          class="hidden-md-and-up"-->
<!--          @click="drawer = !drawer"-->
<!--      />-->
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
