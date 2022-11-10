<template>
  <header class="app-header">
    <router-link to="/">
      <i class="fa-solid fa-house-chimney"></i>
    </router-link>
    <nav>
      <router-link
        v-for="company in companies"
        :key="company._id"
        :to="'/company/' + company._id + '/departments'"
        >{{ company.name }}</router-link
      >
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    companies() {
      return this.$store.getters.companies;
    },
  },
};
</script>