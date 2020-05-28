import { connect } from "react-redux";
//import * as contactActions from "./../../redux/contactActions";
import Contacts from "./Contacts";

const mapStateToProps = (state) => ({
	contacts: state.contacts,
	filter: state.filter,
});

// const mapDispatchToProps = (dispatch) => ({
// 	onRemoveContact: (id) => dispatch(contactActions.removeContact(id)),
// });

export default connect(mapStateToProps)(Contacts);
