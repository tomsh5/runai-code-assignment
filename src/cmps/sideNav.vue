<template>
  <nav class="side-nav">
    <router-link
      :to="'/company/' + company._id + '/departments'"
      title="Deparments"
    >
      <div class="side-nav-item">
        <i class="fa-solid fa-users"></i>
        <span> Deparments </span>
      </div>
    </router-link>
    <router-link
      :to="'/company/' + company._id + '/employees'"
      title="Employees"
    >
      <div class="side-nav-item">
        <i class="fa-solid fa-user"></i>
        <span> Employees</span>
      </div>
    </router-link>
  </nav>
</template>

<script>
export default {
  props: {
    company: Object,
  },
};
</script>