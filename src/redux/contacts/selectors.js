import { createSelector } from "@reduxjs/toolkit";
import { selectFilters } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filterStr) => {
    return contacts.filter((item) =>
      item.name.toLowerCase().trim().includes(filterStr.toLowerCase().trim())
    );
  }
);
