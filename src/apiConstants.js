const baseAPI = '/api';

export const url = {
    addCompany: `${baseAPI}/company`,
    addPerson: `${baseAPI}/person`,
    fetchCompanies: `${baseAPI}/companies`,
    fetchPeople: `${baseAPI}/people`,
    linkCompany: `${baseAPI}/linkCompany`,
    removeEmployee: `${baseAPI}/removeemployee`
};

export const apiMethods = {
    get: 'GET',
    post: 'POST',
    put: 'PUT'
};
