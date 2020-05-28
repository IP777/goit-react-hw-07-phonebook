import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
//------------------------------------------
import style from "./Contacts.module.css";
import slideTransition from "./../transition/slide.module.css";
import ContactItemContainer from "./contactItem/ContactItemContainer";

//Вспомогательная функция для фильтрации контактов
//->возвращает отфильтрованый массив
const filterContacts = (contacts, filter) => {
	return contacts.filter((contact) =>
		contact.name.toLowerCase().includes(filter.toLowerCase())
	);
};

const Contacts = ({ contacts, filter }) => (
	<TransitionGroup component="ul" className={style.list}>
		{filterContacts(contacts, filter).map(({ id, name, number }) => (
			<CSSTransition
				key={id}
				timeout={250}
				classNames={slideTransition}
				unmountOnExit
			>
				<ContactItemContainer id={id} name={name} number={number} />
			</CSSTransition>
		))}
	</TransitionGroup>
);

export default Contacts;
