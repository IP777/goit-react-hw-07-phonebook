import { connect } from "react-redux";
import * as contactOperation from "../../../redux/contactOperation";
import ContactItem from "./ContactItem";

const mapDispatchToProps = {
	onRemoveContact: contactOperation.deleteOperation,
};

export default connect(null, mapDispatchToProps)(ContactItem);
