<template>
  <v-footer
      app
      id="home-footer"
      color="grey darken-4"
      dark
      absolute
  >
    <v-container>
      <v-row>
<!--        <v-col-->
<!--            cols="12"-->
<!--            md="6"-->
<!--        >-->
<!--          <div class="d-flex flex-wrap justify-md-start justify-center justify-md-none">-->
<!--            <template v-for="(s, i) in social">-->
<!--              <a-->
<!--                  :key="s"-->
<!--                  class="white&#45;&#45;text pa-1 pa-md-0"-->
<!--                  href="#"-->
<!--                  v-text="s"-->
<!--              />-->

<!--              <v-responsive-->
<!--                  v-if="i < social.length - 1"-->
<!--                  :key="`divider-${s}`"-->
<!--                  class="mx-4 shrink hidden-sm-and-down"-->
<!--                  max-height="24"-->
<!--              >-->
<!--                <v-divider vertical />-->
<!--              </v-responsive>-->
<!--            </template>-->
<!--          </div>-->
<!--        </v-col>-->

        <v-col
            cols="12"
            md="6"
        >
          <a href="https://webmaster.yandex.ru/siteinfo/?site=feniks-sr.ru">
            <v-img
                src="https://yandex.ru/cycounter?feniks-sr.ru&theme=light&lang=ru"
                height="0"
                max-width="0"
            />
          </a>
        </v-col>


        <v-col
            class="text-center text-md-right"
            cols="12"
            md="6"
        >
          Copyright &copy; {{ date }} Studio Ataka
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'HomeFooter',

    data: () => ({
      social: [
        // 'Facebook',
        // 'Twitter',
        // 'Instagram',
        // 'Linkedin',
      ],
      date: ''
    }),
    methods: {
      setDate() {
        this.date = new Date().getFullYear()
      }
    },
    created() {
      this.setDate()
    }
  }
</script>

<style lang="sass">
  #home-footer a
    text-decoration: none
</style>
