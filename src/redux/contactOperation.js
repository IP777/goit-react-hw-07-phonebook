import axios from "axios";
import {
	fetchPostsStart,
	fetchPostsSuccess,
	fetchPostsError,
	deletePostStart,
	deleteContactSuccess,
	deleteContactError,
	addContactObject,
	contactError,
} from "./contactActions";

export const fetchOperation = () => (dispatch) => {
	dispatch(fetchPostsStart());

	axios
		.get("http://localhost:8086/contacts")
		.then((resp) => {
			dispatch(fetchPostsSuccess(resp.data));
		})
		.catch((error) => {
			dispatch(fetchPostsError(error));
		});
};

export const addContactOperation = (obj) => (dispatch) => {
	dispatch(fetchPostsStart());

	axios
		.post("http://localhost:8086/contacts", {
			id: obj.id,
			name: obj.name,
			number: obj.number,
			newItem: obj.newItem,
		})
		.then(() => {
			dispatch(addContactObject(obj));
		})
		.catch((error) => {
			dispatch(fetchPostsError(error));
		});
};

export const deleteOperation = (id) => (dispatch) => {
	dispatch(deletePostStart());

	axios
		.delete(`http://localhost:8086/contacts/${id}`)
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
