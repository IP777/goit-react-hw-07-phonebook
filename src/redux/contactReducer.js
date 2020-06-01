import { combineReducers } from "redux";
import { Type } from "./type";

const contactReducer = (state = [], { type, payload }) => {
	switch (type) {
		case Type.FETCH_POSTS_SUCCESS:
			return payload.posts;

		case Type.ADD_CONTACT:
			return [...state, payload];
		case Type.REMOVE_CONTACT_SUCCESS:
			return state.filter((contact) => contact.id !== payload.id);
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

const loadigReducer = (state = false, { type, payload }) => {
	switch (type) {
		case Type.FETCH_POSTS_START:
			return true;
		case Type.FETCH_POSTS_SUCCESS:
		case Type.FETCH_POSTS_ERROR:
		case Type.REMOVE_CONTACT_SUCCESS:
		case Type.REMOVE_CONTACT_ERROR:
			return false;
		default:
			return state;
	}
};

const errorReducer = (state = null, { type, payload }) => {
	switch (type) {
		case Type.FETCH_POSTS_START:
		case Type.REMOVE_CONTACT_START:
			return null;
		case Type.FETCH_POSTS_ERROR:
		case Type.REMOVE_CONTACT_ERROR:
		case Type.ERROR_CONTACT:
			return payload.error;
		default:
			return state;
	}
};

export const rootReducer = combineReducers({
	contacts: contactReducer,
	filter: filterReducer,
	loading: loadigReducer,
	error: errorReducer,
});
