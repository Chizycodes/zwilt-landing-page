import React from 'react';
import Menu from './NavMenu';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { MenuIcon } from '../../assets/svgIcons';

const NavBar = () => {
	return (
		<div className="navbar bg-primary rounded-2xl text-white shadow-xl">
			<div className="navbar-start">
				<a className="btn btn-ghost text-xl">
					<img src={Logo} alt="Zwilt Logo" />
				</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<Menu />
				</ul>
			</div>
			<div className="navbar-end">
				<div className="hidden lg:block">
					<Link to="/login" className="mr-4">
						Login
					</Link>
					<Link
						to="/"
						className="btn bg-white text-textDark border-none rounded-2xl hover:bg-lightPurple hover:text-white"
					>
						Join Now
					</Link>
				</div>

				<div className="dropdown dropdown-end">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<MenuIcon />
					</div>

					<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52 ">
						<Menu />
						<li>
							<Link to="/" className="mr-4">
								Login
							</Link>
						</li>
						<li>
							<Link
								to="/"
								className="btn bg-white text-textDark border-none rounded-2xl hover:bg-lightPurple hover:text-white"
							>
								Join Now
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
export default NavBar;
