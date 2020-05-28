import { combineReducers } from "redux";
import { Type } from "./type";

const contactReducer = (state = [], { type, payload }) => {
	switch (type) {
		case Type.ADD_CONTACT:
			return [...state, payload];
		case Type.REMOVE_CONTACT:
			return state.filter((contact) => contact.id !== payload);
		default:
			return state;
	}
};

const filterReducer = (state = "", { type, payload }) => {
	switch (type) {
		case Type.ADD_FILTER:
			return payload;
		default:
			return state;
	}
};

export const rootReducer = combineReducers({
	contacts: contactReducer,
	filter: filterReducer,
});
