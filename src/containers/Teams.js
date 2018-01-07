import { connect } from 'react-redux'; //React and Redux are not intrinsically connected. Must use a seperate library, 'react-redux' to connect the two 
import Teams from '../components/Teams/Teams';


	const mapStateToProps = (state) => ({
		players: state.get("players"),
	});


export default connect(mapStateToProps, null) (Teams);