import React from "react";
import style from "./../Contacts.module.css";

const ContactItem = ({ id, name, number, onRemoveContact }) => {
	const removeContact = (evnt) => {
		onRemoveContact(evnt.target.id);
	};
	return (
		<li className={style.cardWrapper}>
			{name}
			<span>{number}</span>
			<button onClick={removeContact} className={style.cardBtn} id={id}>
				&#10006;
			</button>
		</li>
	);
};

export default ContactItem;
