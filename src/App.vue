<script>
import { RouterLink, RouterView } from "vue-router";
import appHeader from "./cmps/appHeader.vue";
export default {
  components: {
    appHeader,
  },
  created() {
    this.$store.dispatch({ type: "loadCompanies" });
  },
};
</script>

<template>
  <app-header></app-header>
  <RouterView />
</template>
