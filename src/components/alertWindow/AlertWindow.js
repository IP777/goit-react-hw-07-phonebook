import React from "react";
import { CSSTransition } from "react-transition-group";
import openTransition from "./../transition/open.module.css";
import style from "./AlertWindow.module.css";

const AlertWindow = ({ alert, switchAlert }) => {
	return (
		<CSSTransition
			timeout={1000}
			classNames={openTransition}
			in={alert}
			onEnter={() => {
				setTimeout(() => {
					switchAlert(false);
				}, 1000);
			}}
			unmountOnExit
		>
			<div className={style.window}>Contact already exists!</div>
		</CSSTransition>
	);
};

export default AlertWindow;
