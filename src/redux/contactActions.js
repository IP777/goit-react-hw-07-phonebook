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

//-----addContect----
export const addContactPostStart = () => ({
	type: Type.ADD_CONTACT_START,
});

export const addContactContactSuccess = (obj) => ({
	type: Type.ADD_CONTACT_SUCCESS,
	payload: { obj },
});

export const addContactContactError = (error) => ({
	type: Type.ADD_CONTACT_ERROR,
	payload: { error },
});
//-------------------

export const addFilter = (string) => ({
	type: Type.ADD_FILTER,
	payload: string,
	meta: {
		throttle: 100,
	},
});

export const contactError = (error) => ({
	type: Type.ERROR_CONTACT,
	payload: { error },
});
