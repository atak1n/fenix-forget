<template>
  <div>
    <Default/>
  </div>

</template>

<script>
  export default {
    layout: 'blog',
    components: {
      Default: () => import('~/layouts/default_tresh/default')
    }
  // OR

  }
</script>

<style scoped>

</style>
