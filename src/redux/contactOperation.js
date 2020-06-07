import { contactError } from "./contactActions";
import {
	fetchPostsStart,
	fetchPostsSuccess,
	fetchPostsError,
	deletePostStart,
	deleteContactSuccess,
	deleteContactError,
	addContactPostStart,
	addContactContactSuccess,
	addContactContactError,
} from "./contactActions";
import * as api from "./api";

export const fetchOperation = () => (dispatch) => {
	dispatch(fetchPostsStart());

	api.getAllContact
		.then((resp) => {
			dispatch(fetchPostsSuccess(resp.data));
		})
		.catch((error) => {
			dispatch(fetchPostsError(error));
		});
};

export const addContactOperation = (obj) => (dispatch) => {
	dispatch(addContactPostStart());

	api.postContact(obj)
		.then(() => {
			dispatch(addContactContactSuccess(obj));
		})
		.catch((error) => {
			dispatch(addContactContactError(error));
		});
};

export const deleteOperation = (id) => (dispatch) => {
	dispatch(deletePostStart());

	api.deleteContact(id)
		.then(() => {
			dispatch(deleteContactSuccess(id));
		})
		.catch((error) => {
			dispatch(deleteContactError(error));
		});
};

export const catchError = (error) => (dispatch) => {
	dispatch(contactError(error));
};
