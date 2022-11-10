import { companyService } from "../services/company-service";

export const companyStore = {
  state: {
    companies: [],
    selectedCompany: null,
  },
  getters: {
    company({ selectedCompany }) {
      return selectedCompany;
    },
    companies({ companies }) {
      return companies.map((company) => ({
        _id: company._id,
        name: company.name,
      }));
    },
  },
  mutations: {
    setCompany(state, { company }) {
      state.selectedCompany = company;
    },
    setCompanies(state, { companies }) {
      state.companies = companies;
    },
  },
  actions: {
    async loadCompany({ commit }, { id }) {
      try {
        const company = await companyService.getCompanyById(id);
        commit({ type: "setCompany", company });
        return company;
      } catch (err) {
        console.log("could not load company", err);
      }
    },
    async updateCompany({ commit }, { company }) {
      try {
        const updatedCompany = await companyService.saveCompany(company);
        commit({ type: "setCompany", company: updatedCompany });
      } catch (err) {
        console.log("could not update company", err);
      }
    },
    async loadCompanies({ commit }) {
      try {
        const companies = await companyService.getCompanies();
        commit({ type: "setCompanies", companies });
      } catch (err) {
        console.log("could not load companies", err);
      }
    },
  },
};
