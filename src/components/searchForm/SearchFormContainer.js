import { connect } from "react-redux";
import * as contactActions from "./../../redux/contactActions";
import SearchForm from "./SearchForm";

const mapStateToProps = (state) => ({
	contacts: state.contacts,
	filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
	filteredString: (string) => dispatch(contactActions.addFilter(string)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
