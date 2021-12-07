<template>
  <div id="app">
    <v-app>
      <Mine></Mine>
      <v-main>
          <v-scroll-x-transition mode="out-in">
              <router-view></router-view>
          </v-scroll-x-transition>
          <BottomNav></BottomNav>
      </v-main>

    </v-app>
  </div>
</template>
<script>
  import Mine from "@/components/mine"
  import BottomNav from "@/components/bottom-nav"
  export default {
    components: {
      Mine,
        BottomNav
    },
  }
</script>
<style lang="scss">

</style>
