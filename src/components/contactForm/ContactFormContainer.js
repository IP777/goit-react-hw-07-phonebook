import { connect } from "react-redux";
import * as contactOperation from "../../redux/contactOperation";
import * as contactSelector from "../../redux/contactSelector";
import ContactForm from "./ContactForm";

const mapStateToProps = (state) => ({
	contacts: contactSelector.getContact(state),
});

const mapDispatchToProps = {
	addContact: contactOperation.addContactOperation,
	catchError: contactOperation.catchError,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
