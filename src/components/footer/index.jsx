import React from 'react';
import Button from '../Button';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import Underline from '../../assets/underline.svg';

const FooterLinks = [
	{
		heading: 'PLATFORM',
		links: ['Find Work', , 'Find Talent', 'Categories', 'About Us'],
	},
	{
		heading: 'CATEGORIES',
		links: ['Data Science', , 'IT & Networking', 'Web & Mobile'],
	},
	{
		heading: 'HELP',
		links: ["FAQ's", , 'Contact Us'],
	},
	{
		heading: 'GET IN TOUCH @',
		links: ['Instagram', , 'LinkedIn', 'Twitter'],
	},
];

const index = () => {
	return (
		<section className="text-textDark footer-gradient min-h-screen slanted-top relative bottom-0 py-20">
			<div className="section px-8 pb-5">
				<div className="slanted-footer bg-primary w-full flex flex-col items-center justify-center px-3 py-20 gap-4 mb-28">
					<h1 className="text-center text-white text-3xl md:text-5xl font-semibold max-w-[683px]">
						Need a job done, and done well? Get started
					</h1>
					<Button logoDark={false} className="" imageStyle="rotate-90" />
				</div>

				<div>
					<footer className="footer text-white">
						<aside className="max-w-[284px]">
							<img src={Logo} alt="logo" className="mb-4" />
							<p>
								We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified
								talent pool.
							</p>

							<p className="mb-4 mt-6 text-sm">LINKS AND REDIRECTS</p>
							<div className="">
								<Link
									to="/"
									className="btn bg-textDark border-none rounded-2xl hover:bg-lightPurple hover:text-white mr-3"
								>
									Hire now
								</Link>
								<Link to="/" className="btn bg-textDark border-none rounded-2xl hover:bg-lightPurple hover:text-white">
									Apply now
								</Link>
							</div>
						</aside>

						<div className="max-w-[700px] flex flex-col md:justify-self-end">
							<p className="text-xl md:text-4xl font-semibold mb-8">
								Connecting the right people to the right businesses.
							</p>
							<div className="flex justify-between w-full gap-5">
								{FooterLinks.map((link, i) => (
									<nav>
										<h6 className="footer-title mb-4">{link.heading}</h6>
										{link.links.map((item, i) => (
											<div className="mb-3">
												<Link to="/" key={i} className="group ">
													{item}
													<img
														src={Underline}
														alt="underline"
														className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
													/>
												</Link>
											</div>
										))}
									</nav>
								))}
							</div>
						</div>
					</footer>
				</div>
			</div>
			<div className="border-t border-[#a0a3b13b] absolute bottom-0 w-full">
				<div className="section px-8 py-4 flex justify-between gap-6 text-white text-sm md:text-base font-medium">
					<p>All rights reserved by Zwilt</p>
					<div className='flex flex-wrap justify-end gap-2 md:gap-5 text-textGray'>
						<Link to="/" className='link'>Privacy Policy</Link>
						<Link to="/" className='link'>Terms and Conditions</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default index;
