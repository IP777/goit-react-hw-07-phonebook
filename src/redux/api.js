import axios from "axios";
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
	dispatch(addContactPostStart());

	axios
		.post("http://localhost:8086/contacts", {
			id: obj.id,
			name: obj.name,
			number: obj.number,
		})
		.then(() => {
			dispatch(addContactContactSuccess(obj));
		})
		.catch((error) => {
			dispatch(addContactContactError(error));
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
