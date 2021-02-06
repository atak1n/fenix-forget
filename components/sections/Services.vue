<template>
  <base-section
    id="Services"
  >
    <base-section-heading :title="title">
      {{ annotate }}
    </base-section-heading>
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <v-row justify="center">
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            sm="4"
            md="3"
          >
            <base-info-card
              align="center"
              v-bind="card"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
import store from "~/myStore"

  export default {
    name: 'SectionServices',

    data: () => ({
      annotate: store.services.annotate,
      cards: store.services.list,
      title: store.services.title,
    }),
  }
</script>
