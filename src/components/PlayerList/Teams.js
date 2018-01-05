import React, { Component } from "react";
import GenerateTeamsButton from './GenerateTeamsButton';

class Teams extends Component {
	constructor(props) {
		super(props);
	  	this.makeTeams = this.makeTeams.bind(this);
	};

  	makeTeams(e) {
    	e.preventDefault();

render() {
	const { teams } = this.props;

	return (
		const { players } = this.props;

		<form onSubmit={ this.makeTeams } >
            <GenerateTeamsButton className="btn btn-warning" type="submit" value="Make Teams!" />
        </form>



    )

export default Teams;