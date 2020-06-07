import { connect } from "react-redux";
import { compose } from "redux";
import * as contactOperation from "../../../redux/contactOperation";
import ContactItem from "./ContactItem";
//import withRenderLog from "../../hoc/withRenderLog";

const mapDispatchToProps = {
	onRemoveContact: contactOperation.deleteOperation,
};

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(ContactItem);
