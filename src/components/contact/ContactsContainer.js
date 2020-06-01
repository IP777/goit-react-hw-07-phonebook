import { connect } from "react-redux";
import Contacts from "./Contacts";
import * as contactSelector from "../../redux/contactSelector";

const mapStateToProps = (state) => ({
	filteredContact: contactSelector.getFilteredContact(state),
});

export default connect(mapStateToProps)(Contacts);
