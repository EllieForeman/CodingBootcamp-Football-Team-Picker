import { connect } from 'react-redux'; //React and Redux are not intrinsically connected. Must use a seperate library, 'react-redux' to connect the two 
//connect takes funtion and component and makes a container
//updated PlayerList to be a container/smart component instead of just a component 
import PlayerList from '../components/PlayerList/PlayerList';
// import NameInput from '../components/Form/NameInput';
import { addPlayer } from '../store/actionCreators';


	const mapStateToProps = (state) => ({
		players: state.get("players"),
	});

	const mapDispatchToProps = dispatch => ({
		onClick: data => dispatch(addPlayer(data)),
	});

export default connect(mapStateToProps, mapDispatchToProps) (PlayerList);