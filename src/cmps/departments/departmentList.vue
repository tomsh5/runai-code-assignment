<template>
  <section class="department-list" v-if="companyToEdit">
    <h2>Departments</h2>
    <table>
      <thead>
        <th>Department name</th>
        <th>employees</th>
        <th></th>
      </thead>
      <tbody>
        <department-preview
          v-for="department in departments"
          :key="department.id"
          :department="department"
          @setDepartment="setDepartment"
        ></department-preview>
        <new-department @createDepartment="createDepartment"></new-department>
      </tbody>
    </table>
    <modal
      v-if="departmentToRemove"
      :department="departmentToRemove"
      @closeModal="setDepartment"
    ></modal>
  </section>
</template>

<script>
import newDepartment from "./newDepartment.vue";
import departmentPreview from "./departmentPreview.vue";
import modal from "./modal.vue";
export default {
  data() {
    return {
      companyToEdit: null,
      departmentToRemove: null,
    };
  },
  components: {
    modal,
    newDepartment,
    departmentPreview,
  },
  computed: {
    departments() {
      return this.companyToEdit.departments.map((department) => {
        const employees = this.companyToEdit.employees.filter(
          (employee) => employee.departmentId === department.id
        );
        return { ...department, employees };
      });
    },
  },
  methods: {
    setDepartment(department) {
      this.departmentToRemove = department;
    },
    createDepartment(department) {
      this.companyToEdit.departments.push(department);
      this.updateCompany(this.companyToEdit);
    },
    updateCompany(company) {
      this.$store.dispatch({ type: "updateCompany", company });
    },
  },
  watch: {
    "$store.getters.company": {
      handler(value) {
        this.companyToEdit = JSON.parse(JSON.stringify(value));
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>