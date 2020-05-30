import { connect } from "react-redux";
import Contacts from "./Contacts";

const mapStateToProps = (state) => ({
	contacts: state.contacts,
	filter: state.filter,
});

export default connect(mapStateToProps)(Contacts);
