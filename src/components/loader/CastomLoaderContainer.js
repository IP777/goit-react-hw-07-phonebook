import { connect } from "react-redux";
import CastomLoader from "./CastomLoader";
import * as contactSelector from "../../redux/contactSelector";

const mapStateToProps = (state) => ({
	isLoading: contactSelector.getLoading(state),
});

export default connect(mapStateToProps)(CastomLoader);
