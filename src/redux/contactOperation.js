import { contactError } from "./contactActions";

export const catchError = (error) => (dispatch) => {
	dispatch(contactError(error));
};
