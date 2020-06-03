import React, { useEffect } from "react";
//---------------------------------------
import ContactsContainer from "./components/contact/ContactsContainer";
import ContactFormContainer from "./components/contactForm/ContactFormContainer";
import PhonebookTitle from "./components/phonebookTitle/PhonebookTitle";
import SearchFormContainer from "./components/searchForm/SearchFormContainer";
import AlertWindowContainer from "./components/alertWindow/AlertWindowContainer";
import CastomLoaderContainer from "./components/loader/CastomLoaderContainer";
//console.log(process.env)

const App = ({ fetchContacts }) => {
	useEffect(() => {
		fetchContacts();
	});

	return (
		<>
			<PhonebookTitle name="Phonebook" />

			<ContactFormContainer />

			<SearchFormContainer />

			<ContactsContainer />

			<AlertWindowContainer />

			<CastomLoaderContainer />
		</>
	);
};

export default App;
