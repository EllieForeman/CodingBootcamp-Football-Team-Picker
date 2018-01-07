import React from "react";
//functional component for addplayer button
const Footer = () => { //properties of button 
  	return (
  		<section className="footer">
	  	<div className="footerWrapper">
        <h4 className="footerText">Contact me:</h4>
        <button type="button" className="btn footerButton"><span className="glyphicon glyphicon-envelope"></span> <a href="foreman.eleanor@gmail.com">Email</a> </button>
        <button type="button" className="btn footerButton"> <a href="https://www.linkedin.com/in/ellie-foreman-a10b927b" alt="link to LinkedIn account">Linkedin</a> </button>       
        <button type="button" className="btn footerButton"><a href="https://twitter.com/EllieForeman1" alt="link to Twitter account"></a> Twitter</button>
	 	</div>
		<p className="footerMadeBy">Made by Ellie Foreman</p>
		</section>
	);
}
export default Footer;
