import React, { Component } from "react";
import { connect } from "react-redux";
//---------------------------------------
import * as contactOperation from "./redux/contactOperation";
import ContactsContainer from "./components/contact/ContactsContainer";
import ContactFormContainer from "./components/contactForm/ContactFormContainer";
import PhonebookTitle from "./components/phonebookTitle/PhonebookTitle";
import SearchFormContainer from "./components/searchForm/SearchFormContainer";

class App extends Component {
	componentDidMount = () => {
		this.props.fetchContacts();
	};

	render() {
		return (
			<>
				<PhonebookTitle name="Phonebook" />

				<ContactFormContainer />

				<SearchFormContainer />

				<ContactsContainer />
			</>
		);
	}
}

const mapDispatchToProps = {
	fetchContacts: contactOperation.fetchOperation,
};

export default connect(null, mapDispatchToProps)(App);
