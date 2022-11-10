<template>
  <tr>
    <td colspan="2">
      Create department :
      <input
        class="name-input"
        type="text"
        placeholder="Department name"
        v-model="departmentName"
      />
    </td>
    <td><button class="success" @click="createDepartment">Create</button></td>
  </tr>
</template>

<script>
import { utilService } from "../../services/util-service";

export default {
  data() {
    return {
      departmentName: "",
    };
  },
  methods: {
    createDepartment() {
      if (!this.departmentName) return;
      const department = utilService.createDepartment(this.departmentName);
      this.$emit("createDepartment", department);
      this.departmentName = "";
    },
  },
};
</script>