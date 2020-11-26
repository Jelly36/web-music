<template>
  <div id="app">
    <v-app>
      <Mine></Mine>
      <v-main>
        <router-view></router-view>
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
