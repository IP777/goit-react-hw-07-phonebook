import { connect } from "react-redux";
import * as contactOperation from "../../redux/contactOperation";
import ContactForm from "./ContactForm";

const mapStateToProps = (state) => ({
	contacts: state.contacts,
});

const mapDispatchToProps = {
	addContact: contactOperation.addContactOperation,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
