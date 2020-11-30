<template>
  <div id="app">
    <v-app>
      <Mine></Mine>
      <v-main style="padding-left: 256px">
          <v-scroll-x-transition mode="out-in">
              <router-view></router-view>
          </v-scroll-x-transition>
      </v-main>
    </v-app>
  </div>
</template>
<script>
  import Mine from "@/components/mine"
  export default {
    components: {
      Mine
    },
  }
</script>
<style lang="scss">

</style>
