import { connect } from "react-redux";
import PlayerInputArea from "../components/Form/PlayerInputArea";

//action creator
import { addPlayer } from "../store/actionCreators.js";

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: data => dispatch(addPlayer(data)),
    };
};

export default connect(null, mapDispatchToProps)(PlayerInputArea);