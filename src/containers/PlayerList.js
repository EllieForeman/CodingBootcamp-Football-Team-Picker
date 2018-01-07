import { connect } from 'react-redux'; //React and Redux are not intrinsically connected. Must use a seperate library, 'react-redux' to connect the two 
import PlayerList from '../components/PlayerList/PlayerList';
import { addPlayer } from '../store/actionCreators';


	const mapStateToProps = (state) => ({
		players: state.get("players"),
	});

	const mapDispatchToProps = dispatch => ({
		onClick: data => dispatch(addPlayer(data)),
	});

export default connect(mapStateToProps, mapDispatchToProps) (PlayerList);