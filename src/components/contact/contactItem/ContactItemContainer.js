import { connect } from "react-redux";
import { compose } from "redux";
import * as api from "../../../redux/api";
import ContactItem from "./ContactItem";
//import withRenderLog from "../../hoc/withRenderLog";

const mapDispatchToProps = {
	onRemoveContact: api.deleteOperation,
};

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(ContactItem);
