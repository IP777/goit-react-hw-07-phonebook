import { connect } from "react-redux";
import AlertWindow from "./AlertWindow";
import * as contactSelector from "../../redux/contactSelector";

const mapStateToProps = (state) => ({
	error: contactSelector.getError(state),
});

export default connect(mapStateToProps)(AlertWindow);
