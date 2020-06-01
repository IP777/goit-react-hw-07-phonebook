import { connect } from "react-redux";
import * as contactActions from "./../../redux/contactActions";
import SearchForm from "./SearchForm";
import * as contactSelector from "../../redux/contactSelector";

const mapStateToProps = (state) => ({
	contacts: contactSelector.getContact(state),
	filter: contactSelector.getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
	filteredString: (string) => dispatch(contactActions.addFilter(string)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
