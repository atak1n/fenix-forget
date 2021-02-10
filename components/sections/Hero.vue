<template>
  <v-theme-provider dark>
    <section id="hero">
<!--    <v-img-->
<!--      :min-height="minHeight"-->
<!--      :src="require('@/assets/promo-1.jpg')"-->
<!--      class="white&#45;&#45;text"-->
<!--      gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"-->
<!--    >-->
<!--          gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"-->

    <v-img
      :min-height="minHeight"
      :src="require('@/assets/home_hero_2.jpg')"
      class="white--text"
      gradient="180deg, rgba(2,0,36,1) 0%, rgba(255,192,0,0.6334733722590599) 0%, rgba(244,81,30,1) 100%, rgba(55,55,145,1) 100%"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center"
          height="100%"
          max-width="800"
          width="100%"
        >
<!--          <base-heading title="ФЕНИКС СТАЛЬНЫЕ РЕШЕНИЯ" />-->
          <base-heading><span>{{ company.name }}</span></base-heading>
          <base-heading>
            <p class="font-weight-light text-h5">{{ company.slogan }}</p>
          </base-heading>

          <base-heading>
            <p class="base-body body-1 light--text  text-left mb-10">{{ company.about }}</p>
          </base-heading>

<!--          <div-->
<!--            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"-->
<!--            class="d-flex flex-wrap"-->
<!--          >-->
<!--            <base-btn-->
<!--                :href="'tel:' + contacts.phoneNumbers.main"-->
<!--                :tile="false"-->
<!--                class="ma-2"-->
<!--            >-->
<!--              <v-icon large left v-text="contacts.phoneNumbers.icon"/>-->
<!--              {{ contacts.phoneNumbers.main }}-->
<!--            </base-btn>-->

<!--            <base-btn-->
<!--                :href="getHref(contacts.whatsapp)"-->
<!--                color="green"-->
<!--                :tile="false"-->
<!--                class="ma-2"-->
<!--            >-->
<!--              <v-icon large left v-text="contacts.whatsapp.icon"/>-->
<!--              {{ contacts.whatsapp.title }}-->
<!--            </base-btn>-->

<!--            <span class="font-weight-bold ml-6 mr-4 my-4">&nbsp;&nbsp;&nbsp;</span>-->

<!--            <base-btn-->
<!--                :href="getHref(contacts.telegram)"-->
<!--                color="blue"-->
<!--                :tile="false"-->
<!--                class="ma-2"-->
<!--            >-->
<!--              <v-icon large left v-text="contacts.telegram.icon"/>-->
<!--              {{ contacts.telegram.title }}-->
<!--            </base-btn>-->

<!--            <base-btn-->
<!--                :href="getHref(contacts.viber)"-->
<!--                color="purple"-->
<!--                :tile="false"-->
<!--                class="ma-2"-->
<!--            >-->
<!--              &lt;!&ndash;              <v-icon large left v-text="contacts.whatsapp.icon"/>&ndash;&gt;-->
<!--              <v-img-->
<!--                  :src="require('@/assets/viber-light.svg')"-->
<!--                  contain-->
<!--                  height="32"-->
<!--                  max-width="32"-->
<!--                  class="mr-1"-->

<!--              />-->
<!--              {{ contacts.viber.title }}-->
<!--            </base-btn>-->


<!--          </div>-->
        </v-responsive>
      </v-container>
    </v-img>
  </section>
  </v-theme-provider>

</template>

<script>
  import store from "~/myStore"
  import BaseHeading from "~/components/base/Heading";

  export default {
    name: 'SectionHero',
    components: {BaseHeading},
    provide: {
      theme: { isDark: true },
    },

    data: () => ({
      contacts: {...store.contacts},
      company: {...store.company},
    }),
    methods: {
      getHref(contact) {
        return `${contact.href}${contact.link}`
      }
    },
    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>
