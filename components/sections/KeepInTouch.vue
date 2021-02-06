<template>
  <base-section
    id="info-alt"
    space="56"
  >
    <v-container>
      <v-row justify="space-between">
        <v-col
          cols="12"
          md="5"
        >
          <base-fenix-business-contact title="Контакты" dense>
            {{ company.welcome }}
          </base-fenix-business-contact>
          <social-networks light-theme/>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <base-contact-form title="НАПИШИТЕ НАМ" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  import store from "~/myStore";

  export default {
    name: 'SectionKeepInTouch',
    components: {
      SocialNetworks: () => import('~/components/SocialNetworks'),
    },
    data: () => ({
      company: store.company
    }),
  }
</script>
