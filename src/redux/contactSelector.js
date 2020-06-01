import { createSelector } from "reselect";

export const getContact = (state) => state.contacts;

export const getFilter = (state) => state.filter;

export const getError = (state) => state.error;

export const getFilteredContact = createSelector(
	[getContact, getFilter],
	(contacts, filter) => {
		if (contacts.length) {
			return contacts.filter((contact) =>
				contact.name.toLowerCase().includes(filter.toLowerCase())
			);
		}
		return contacts;
	}
);
