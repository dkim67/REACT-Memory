import React from 'react';
import './Navbar.css';





function Navbar(props) {
	return(
	<div className="navbar-fixed">
		<nav className="topnav">
			<div className="nav-wrapper container">
				<a style={{cursor: 'pointer'}}className='left' onClick={() => 
					{document.getElementsByClassName('instructionsModal')[0].classList.remove('hide');
				}}></a>
				<a href="/" className='brand-logo center title'>React Memory Game!</a>
				<ul className='right'>
					<li style={{paddingRight: "30px"}}>Score: {props.score}</li>
					<li style={{paddingLeft: "3.nav0px"}}>Top Score: {props.topScore}</li>
				</ul>
			</div>
		</nav>
	</div>
	)
}



export default Navbar;