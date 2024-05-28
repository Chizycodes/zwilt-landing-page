import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		<>
			<li>
				<Link>Find Work</Link>
			</li>
			<li>
				<Link>Find Talent</Link>
			</li>
			<li>
				<Link>Articles</Link>
			</li>
			<li>
				<Link>About Us</Link>
			</li>
			<li>
				<Link>Contact Us</Link>
			</li>
		</>
	);
};

export default Menu;
