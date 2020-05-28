import { connect } from "react-redux";
import * as contactActions from "./../../redux/contactActions";
import AlertWindow from "./AlertWindow";

const mapStateToProps = (state) => ({
	alert: state.alert,
});

const mapDispatchToProps = (dispatch) => ({
	switchAlert: (bool) => dispatch(contactActions.alertToggle(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlertWindow);
