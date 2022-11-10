<template>
  <tr>
    <td colspan="2">
      <label
        >Name
        <input
          type="text"
          v-model="newEmployee.name"
          placeholder="Employee's name"
      /></label>
    </td>
    <td>
      <select
        class="new-employee-department"
        v-model="newEmployee.departmentId"
      >
        <option value="" disabled>Department</option>
        <option
          v-for="department in departments"
          :key="department.id"
          :value="department.id"
        >
          {{ department.name }}
        </option>
      </select>
    </td>
    <td><button class="success" @click="createEmployee">Create</button></td>
  </tr>
</template>

<script>
import { utilService } from "../../services/util-service";

export default {
  data() {
    return {
      newEmployee: {
        name: "",
        departmentId: "",
      },
    };
  },
  computed: {
    departments() {
      return this.$store.getters.company.departments;
    },
  },
  methods: {
    createEmployee() {
      const { name, departmentId } = this.newEmployee;
      if (!name || !departmentId) return;
      const employee = utilService.createEmployee(name, departmentId);
      this.$emit("createEmployee", employee);
      this.newEmployee = {
        name: "",
        departmentId: "",
      };
    },
  },
};
</script>