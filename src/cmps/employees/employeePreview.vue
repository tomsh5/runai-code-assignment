<template>
  <tr class="employee-preview">
    <td>{{ employee.name }}</td>
    <td>{{ employee.department }}</td>
    <td>{{ employee.joinDate }}</td>
    <td>
      <button class="alert" @click="removeEmployee(employee.id)">Remove</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    employee: Object,
  },
  methods: {
    removeEmployee(id) {
      this.$emit("removeEmployee", id);
    },
  },
};
</script>

<style>
</style>