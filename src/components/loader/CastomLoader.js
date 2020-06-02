import React from "react";
import Loader from "react-loader-spinner";
import style from "./CastomLoader.module.css";

const CastomLoader = ({ isLoading }) => {
	return (
		<Loader
			type="ThreeDots"
			color="#00BFFF"
			height={80}
			width={80}
			visible={isLoading}
			//timeout={1000}
			className={style.spinner}
		/>
	);
};

export default CastomLoader;
