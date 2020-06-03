import * as api from "./redux/api";
import { connect } from "react-redux";
import App from "./App";

const mapDispatchToProps = {
	fetchContacts: api.fetchOperation,
};

export default connect(null, mapDispatchToProps)(App);
