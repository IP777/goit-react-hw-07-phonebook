import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import openTransition from "./../transition/open.module.css";
import style from "./AlertWindow.module.css";

export default class AlertWindow extends Component {
	state = {
		inError: false,
		message: "",
	};

	componentDidUpdate = (nextProps, nextState) => {
		if (!!this.props.error) {
			if (this.state.inError === nextState.inError) {
				//console.log(this.props.error.message);
				this.setState({
					inError: true,
					message: this.props.error.message,
				});
			}
		}
	};

	render() {
		const { inError, message } = this.state;
		return (
			<CSSTransition
				timeout={1000}
				classNames={openTransition}
				in={inError}
				onEnter={() => {
					setTimeout(() => {
						this.setState({ inError: false });
					}, 1000);
				}}
				unmountOnExit
			>
				<div className={style.window}>{message}</div>
			</CSSTransition>
		);
	}
}
