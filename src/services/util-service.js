function createDepartment(name) {
  return {
    name,
    id: createId(),
    desc: "",
  };
}

function createEmployee(name, departmentId) {
  return {
    name,
    departmentId,
    id: createId(),
    createdAt: Date.now(),
  };
}

function createId(length = 5) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export const utilService = {
  createDepartment,
  createEmployee,
  createId,
};
