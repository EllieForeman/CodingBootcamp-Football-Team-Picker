import { connect } from "react-redux";
import PlayerListItem from "../components/PlayerList/PlayerListItem";
import { removePlayer } from "../store/actionCreators";

const mapDispatchToProps = (dispatch, { name } ) => {
	return {
		onDelete: () => dispatch(removePlayer(name.get("id"))),
	}
}

export default connect(null , mapDispatchToProps)(Player);