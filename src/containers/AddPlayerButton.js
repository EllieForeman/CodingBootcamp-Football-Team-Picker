import { connect } from "react-redux";

import AddPlayerButton from "../components/Form/AddPlayerButton";

const mapStateToProps = state => {
	return {
		players: state.get("players"),
	};
};

export default connect(mapStateToProps)(AddPlayerButton);