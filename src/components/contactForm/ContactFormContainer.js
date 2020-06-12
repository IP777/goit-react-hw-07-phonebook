import { connect } from "react-redux";
import * as contactOperation from "../../redux/contactOperation";
import * as contactSelector from "../../redux/contactSelector";
import * as contactActions from "../../redux/contactActions";
import ContactForm from "./ContactForm";
//import { contactError } from "../../redux/contactActions";

const mapStateToProps = (state) => ({
	contacts: contactSelector.getContact(state),
});

// const mapDispatchToProps = {
// 	addContact: contactOperation.addContactOperation,
// 	catchError: contactOperation.catchError,
// };

const mapDispatchToProps = (dispatch) => ({
	addContact: (param) =>
		dispatch(contactOperation.addContactOperation(param)),
	contactError: (message) => dispatch(contactActions.contactError(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
