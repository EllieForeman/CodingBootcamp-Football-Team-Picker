import { connect } from 'react-redux'; //React and Redux are not intrinsically connected. Must use a seperate library, 'react-redux' to connect the two 
//connect takes funtion and component and makes a container
//updated PlayerList to be a container/smart component instead of just a component 
import Teams from '../components/PlayerList/Teams';
// import NameInput from '../components/Form/NameInput';


	const mapStateToProps = (state) => ({
		players: state.get("players"),
	});


export default connect(mapStateToProps, null) (Teams);