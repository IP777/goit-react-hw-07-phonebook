import { Type } from "./type";

//Тип в виде обьекта
export const addContactArray = (arr) => ({
	type: Type.ADD_CONTACT,
	payload: arr,
});

export const removeContact = (id) => ({
	type: Type.REMOVE_CONTACT,
	payload: id,
});

export const addFilter = (string) => ({
	type: Type.ADD_FILTER,
	payload: string,
});
