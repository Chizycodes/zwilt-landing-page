import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
	return (
		<>
			<li>
				<NavLink>Find Work</NavLink>
			</li>
			<li>
				<NavLink>Find Talent</NavLink>
			</li>
			<li>
				<NavLink>Articles</NavLink>
			</li>
			<li>
				<NavLink>About Us</NavLink>
			</li>
			<li>
				<NavLink>Contact Us</NavLink>
			</li>
		</>
	);
};

export default Menu;
