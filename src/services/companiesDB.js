import { storageService } from "./storage-service";

export async function createCompanies() {
  const companies = [
    {
      name: "Google",
      departments: [
        {
          id: "de01",
          name: "HR",
        },
        {
          id: "de02",
          name: "Sales",
        },
        {
          id: "de03",
          name: "R&D",
        },
        {
          id: "de04",
          name: "Marketing",
        },
      ],
      employees: [
        {
          id: "em01",
          name: "Yoni Bloch",
          departmentId: "de01",
          createdAt: Date.now(),
        },
        {
          id: "em02",
          name: "Dudu Tassa",
          departmentId: "de03",
          createdAt: Date.now(),
        },
        {
          id: "em03",
          name: "Tomer Yosef",
          departmentId: "de02",
          createdAt: Date.now(),
        },
        {
          id: "em04",
          name: "Itay Zvuloon",
          departmentId: "de02",
          createdAt: Date.now(),
        },
        {
          id: "em05",
          name: "Ravid Plotnik",
          departmentId: "de01",
          createdAt: Date.now(),
        },
        {
          id: "em06",
          name: "Efrat Gosh",
          departmentId: "de04",
          createdAt: Date.now(),
        },
        {
          id: "em07",
          name: "Noga Erez",
          departmentId: "de01",
          createdAt: Date.now(),
        },
        {
          id: "em08",
          name: "Yasmin Mualem",
          departmentId: "de04",
          createdAt: Date.now(),
        },
      ],
    },
    {
      name: "Amazon",
      departments: [
        {
          id: "de01",
          name: "HR",
        },
        {
          id: "de02",
          name: "Sales",
        },
        {
          id: "de03",
          name: "R&D",
        },
        {
          id: "de04",
          name: "Marketing",
        },
      ],
      employees: [
        {
          id: "em01",
          name: "Yoni Bloch",
          departmentId: "de01",
          createdAt: Date.now(),
        },
        {
          id: "em02",
          name: "Dudu Tassa",
          departmentId: "de03",
          createdAt: Date.now(),
        },
        {
          id: "em03",
          name: "Tomer Yosef",
          departmentId: "de02",
          createdAt: Date.now(),
        },
        {
          id: "em04",
          name: "Itay Zvuloon",
          departmentId: "de02",
          createdAt: Date.now(),
        },
        {
          id: "em05",
          name: "Ravid Plotnik",
          departmentId: "de01",
          createdAt: Date.now(),
        },
        {
          id: "em06",
          name: "Efrat Gosh",
          departmentId: "de04",
          createdAt: Date.now(),
        },
        {
          id: "em07",
          name: "Noga Erez",
          departmentId: "de01",
          createdAt: Date.now(),
        },
        {
          id: "em08",
          name: "Yasmin Mualem",
          departmentId: "de04",
          createdAt: Date.now(),
        },
      ],
    },
    {
      name: "Netflix",
      departments: [
        {
          id: "de01",
          name: "HR",
        },
        {
          id: "de02",
          name: "Sales",
        },
        {
          id: "de03",
          name: "R&D",
        },
        {
          id: "de04",
          name: "Marketing",
        },
      ],
      employees: [
        {
          id: "em01",
          name: "Yoni Bloch",
          departmentId: "de01",
          createdAt: Date.now(),
        },
        {
          id: "em02",
          name: "Dudu Tassa",
          departmentId: "de03",
          createdAt: Date.now(),
        },
        {
          id: "em03",
          name: "Tomer Yosef",
          departmentId: "de02",
          createdAt: Date.now(),
        },
        {
          id: "em04",
          name: "Itay Zvuloon",
          departmentId: "de02",
          createdAt: Date.now(),
        },
        {
          id: "em05",
          name: "Ravid Plotnik",
          departmentId: "de01",
          createdAt: Date.now(),
        },
        {
          id: "em06",
          name: "Efrat Gosh",
          departmentId: "de04",
          createdAt: Date.now(),
        },
        {
          id: "em07",
          name: "Noga Erez",
          departmentId: "de01",
          createdAt: Date.now(),
        },
        {
          id: "em08",
          name: "Yasmin Mualem",
          departmentId: "de04",
          createdAt: Date.now(),
        },
      ],
    },
  ];

  try {
    const savedCompanies = await storageService.postMany(
      "companiesDB",
      companies
    );
    return savedCompanies;
  } catch (err) {
    console.log("could not create companies DB", err);
  }
}
