import * as contactOperation from "./redux/contactOperation";
import { connect } from "react-redux";
import App from "./App";

const mapDispatchToProps = {
	fetchContacts: contactOperation.fetchOperation,
};

export default connect(null, mapDispatchToProps)(App);
