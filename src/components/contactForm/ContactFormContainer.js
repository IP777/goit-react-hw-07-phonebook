import { connect } from "react-redux";
import * as api from "../../redux/api";
import * as contactOperation from "../../redux/contactOperation";
import * as contactSelector from "../../redux/contactSelector";
import ContactForm from "./ContactForm";

const mapStateToProps = (state) => ({
	contacts: contactSelector.getContact(state),
});

const mapDispatchToProps = {
	addContact: api.addContactOperation,
	catchError: contactOperation.catchError,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
