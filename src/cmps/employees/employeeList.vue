<template>
  <section v-if="companyToEdit" class="employee-list">
    <h2>Employees</h2>
    <label
      >Filter employees by department
      <select v-model="filterBy.departmentId" @change="setFilter">
        <option value="">All</option>
        <option
          v-for="department in departments"
          :key="department.id"
          :value="department.id"
        >
          {{ department.name }}
        </option>
      </select>
    </label>
    <table>
      <thead>
        <th>Name</th>
        <th>Department</th>
        <th>Join Date</th>
        <th></th>
      </thead>
      <tbody>
        <employee-preview
          v-for="employee in employees"
          :key="employee.id"
          :employee="employee"
          @removeEmployee="removeEmployee"
        ></employee-preview>
        <new-employee @createEmployee="createEmployee" />
      </tbody>
    </table>
  </section>
</template>

<script>
import newEmployee from "./newEmployee.vue";
import employeePreview from "./employeePreview.vue";
export default {
  data() {
    return {
      companyToEdit: null,
      filterBy: {
        departmentId: "",
      },
    };
  },
  components: {
    newEmployee,
    employeePreview,
  },
  computed: {
    employees() {
      return this.companyToEdit.employees
        .filter((employee) =>
          this.filterBy.departmentId
            ? employee.departmentId === this.filterBy.departmentId
            : employee
        )
        .map((employee) => {
          const department = this.departments.find(
            (department) => department.id === employee.departmentId
          ).name;
          const options = { year: "numeric", month: "short", day: "2-digit" };
          const joinDate = Intl.DateTimeFormat("en-US", options).format(
            employee.createdAt
          );
          return { ...employee, department, joinDate };
        });
    },
    departments() {
      return this.companyToEdit.departments;
    },
  },
  methods: {
    createEmployee(employee) {
      this.companyToEdit.employees.push(employee);
      this.updateCompany(this.companyToEdit);
    },
    updateCompany(company) {
      this.$store.dispatch({ type: "updateCompany", company });
    },
    removeEmployee(id) {
      const idx = this.companyToEdit.employees.findIndex(
        (employee) => employee.id === id
      );
      this.companyToEdit.employees.splice(idx, 1);
      this.updateCompany(this.companyToEdit);
    },
    setFilter() {
      this.$router.replace({
        query: { departmentId: this.filterBy.departmentId },
      });
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
  created() {
    const { departmentId } = this.$route.query;
    this.filterBy.departmentId = departmentId || "";
  },
};
</script>