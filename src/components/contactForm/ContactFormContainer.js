import { connect } from "react-redux";
import * as contactActions from "../../redux/contactActions";
import ContactForm from "./ContactForm";

const mapStateToProps = (state) => ({
	contacts: state.contacts,
});

const mapDispatchToProps = (dispatch) => ({
	addContact: (arr) => dispatch(contactActions.addContactArray(arr)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
