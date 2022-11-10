<template>
  <div class="employee-list">
    <div
      v-for="employee in employeesToEdit"
      :key="employee.id"
      class="employee-preview"
    >
      <span>{{ employee.name }}</span>
      <select v-model="employee.departmentId">
        <option :value="departmentId"></option>
        <option
          v-for="department in departments"
          :key="department.id"
          :value="department.id"
        >
          {{ department.name }}
        </option>
      </select>
    </div>
    <p>* Employees that won't be assigned will be deleted</p>
    <div class="assign-btn-container">
      <button class="alert" @click="assignEmployees">Assign and delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    employees: Array,
    departments: Array,
    departmentId: String,
  },
  data() {
    return {
      employeesToEdit: JSON.parse(JSON.stringify(this.employees)),
    };
  },
  methods: {
    assignEmployees() {
      this.$emit("assignEmployees", this.employeesToEdit);
    },
  },
};
</script>