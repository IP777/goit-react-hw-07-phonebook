import { Type } from "./type";

//---getFeth----
export const fetchPostsStart = () => ({
	type: Type.FETCH_POSTS_START,
});

export const fetchPostsSuccess = (posts) => ({
	type: Type.FETCH_POSTS_SUCCESS,
	payload: { posts },
});

export const fetchPostsError = (error) => ({
	type: Type.FETCH_POSTS_ERROR,
	payload: { error },
});
//----------

//---deleteFeth----
export const deletePostStart = () => ({
	type: Type.REMOVE_CONTACT_START,
});

export const deleteContactSuccess = (id) => ({
	type: Type.REMOVE_CONTACT_SUCCESS,
	payload: { id },
});

export const deleteContactError = (error) => ({
	type: Type.REMOVE_CONTACT_ERROR,
	payload: { error },
});
//-----------------

export const addContactObject = (obj) => ({
	type: Type.ADD_CONTACT,
	payload: obj,
});

export const addFilter = (string) => ({
	type: Type.ADD_FILTER,
	payload: string,
});

export const contactError = (error) => ({
	type: Type.ERROR_CONTACT,
	payload: { error },
});
