import React from "react";
//---------------------------------------
import ContactsContainer from "./components/contact/ContactsContainer";
import ContactFormContainer from "./components/contactForm/ContactFormContainer";
import PhonebookTitle from "./components/phonebookTitle/PhonebookTitle";
import SearchFormContainer from "./components/searchForm/SearchFormContainer";

const App = () => (
	<>
		<PhonebookTitle name="Phonebook" />

		<ContactFormContainer />

		<SearchFormContainer />

		<ContactsContainer />
	</>
);

export default App;
