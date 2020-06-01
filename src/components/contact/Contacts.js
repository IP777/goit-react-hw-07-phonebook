import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
//------------------------------------------
import style from "./Contacts.module.css";
import slideTransition from "./../transition/slide.module.css";
import ContactItemContainer from "./contactItem/ContactItemContainer";

const Contacts = ({ filteredContact }) => (
	<TransitionGroup component="ul" className={style.list}>
		{filteredContact.map(({ id, name, number }) => (
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
