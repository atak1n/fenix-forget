<template>
  <base-section
    id="features"
  >
    <base-section-heading :title="title">
      {{ annotate }}
    </base-section-heading>
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            sm="4"
            md="3"
            justify="center"
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
  import store from "~/myStore";

  export default {
    name: 'SectionFeatures',

    data: () => ({
      title: store.features.title,
      annotate: store.features.annotate,
      cards: store.features.list
    }),
  }
</script>
