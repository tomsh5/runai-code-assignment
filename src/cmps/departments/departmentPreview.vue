<template>
  <tr>
    <td>{{ department.name }}</td>
    <td>{{ department.employees.length }}</td>
    <td>
      <button class="alert" @click="setDepartment(department)">Remove</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    department: Object,
  },
  methods: {
    setDepartment(department) {
      this.$emit("setDepartment", department);
    },
  },
};
</script>

<style>
</style>