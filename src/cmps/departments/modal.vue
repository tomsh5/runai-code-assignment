<template>
  <section class="bg" @click.self="closeModal">
    <section class="modal" @click.stop>
      <button @click="closeModal">✖</button>
      <section v-if="isAssigning">
        <p>This department has employees.</p>
        <p>Would you like to assign them to other departments?</p>
        <div class="btns-container">
          <button class="success" @click="setAssign(true)">Assign</button>
          <button
            class="alert"
            @click="assignEmployees(this.department.employees)"
          >
            Delete
          </button>
        </div>
      </section>
      <employees-assignment
        v-if="assign"
        :employees="department.employees"
        :departments="departments"
        :departmentId="department.id"
        @assignEmployees="assignEmployees"
      />
      <div v-if="!department.employees?.length">
        <p>Are you sure you want to delete this department?</p>
        <div class="btns-container">
          <button class="success" @click="deleteDepartment">Ok</button>
          <button class="alert" @click="closeModal">Cancel</button>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import employeesAssignment from "./employeesAssignment.vue";
export default {
  props: {
    department: Object,
  },
  data() {
    return {
      employees: JSON.parse(JSON.stringify(this.department.employees)),
      assign: null,
    };
  },
  components: {
    employeesAssignment,
  },
  computed: {
    departments() {
      return this.$store.getters.company.departments.filter(
        (department) => department.id !== this.department.id
      );
    },
    isAssigning() {
      return this.department.employees?.length && this.assign === null;
    },
    company() {
      return this.$store.getters.company;
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    assignEmployees(employees) {
      const company = JSON.parse(JSON.stringify(this.company));
      employees.forEach((employee) => {
        const idx = company.employees.findIndex(
          (companyEmployee) => companyEmployee.id === employee.id
        );
        const args =
          employee.departmentId === this.department.id
            ? [idx, 1]
            : [idx, 1, employee];
        company.employees.splice(...args);
      });
      this.deleteDepartment(company);
    },
    deleteDepartment(company) {
      company = company._id
        ? company
        : JSON.parse(JSON.stringify(this.company));
      const idx = company.departments.findIndex(
        (department) => department.id === this.department.id
      );
      company.departments.splice(idx, 1);
      this.updateCompany(company);
    },
    updateCompany(company) {
      this.$store.dispatch({ type: "updateCompany", company });
      this.closeModal();
    },
    setAssign(isAssign) {
      this.assign = isAssign;
    },
  },
};
</script>