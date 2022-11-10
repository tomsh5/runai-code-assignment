<template>
  <section v-if="company" class="company-app">
    <side-nav :company="company" />
    <main>
      <h1>
        {{ company.name }}
      </h1>
      <router-view></router-view>
    </main>
  </section>
</template>

<script>
import sideNav from "../cmps/sideNav.vue";

export default {
  data() {
    return {
      company: null,
    };
  },
  components: {
    sideNav,
  },
  computed: {
    companyId() {
      return this.$route.params.id;
    },
  },
  watch: {
    companyId: {
      async handler(value) {
        this.company = await this.$store.dispatch({
          type: "loadCompany",
          id: value,
        });
      },
      immediate: true,
    },
  },
};
</script>

<style>
</style>