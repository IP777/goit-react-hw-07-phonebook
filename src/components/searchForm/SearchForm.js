import React from "react";
import { CSSTransition } from "react-transition-group";
import InputTitle from "./../inputTitle/InputTitle";
import style from "./SearchForm.module.css";
import popTransition from "./../transition/pop.module.css";

const SearchForm = ({ contacts, filter, filteredString }) => (
	<CSSTransition
		timeout={250}
		classNames={popTransition}
		in={contacts.length > 2 || filter ? true : false}
		unmountOnExit
	>
		<div className={style.wrapper}>
			<InputTitle
				title="Find contacts by name"
				handleChange={(e) => filteredString(e.target.value)}
				placeholder="Search something...."
			/>
		</div>
	</CSSTransition>
);

export default SearchForm;
