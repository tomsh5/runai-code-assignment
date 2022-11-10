import { storageService } from "./storage-service";
import { createCompanies } from "./companiesDB";

async function getCompanies() {
  try {
    let companies = await storageService.query("companiesDB");
    if (!companies.length) companies = createCompanies();
    return companies;
  } catch (err) {
    console.log("could not find companies", err);
  }
}

async function getCompanyById(id) {
  try {
    const company = await storageService.get("companiesDB", id);
    return company;
  } catch (err) {}
}

async function saveCompany(company) {
  try {
    const updatedCompany = company._id
      ? await storageService.put("companiesDB", company)
      : await storageService.post("companiesDB", company);
    return updatedCompany;
  } catch (err) {
    console.log("could not update company in DB", err);
  }
}

export const companyService = {
  getCompanies,
  getCompanyById,
  saveCompany,
};
