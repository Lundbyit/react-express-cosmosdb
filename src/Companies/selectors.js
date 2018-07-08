import { createSelector } from 'reselect';
import { companies } from '../selectors';

export const getClearInput = state => state.companies.clearInput;

export const getCompaniesNameAndId = createSelector(
    companies,
    companies => companies.companies.map((company) => ({
        label: company.name,
        value: company._id
    }))
);

export const getSelectedCompany = state => state.companies.selectedCompany;
