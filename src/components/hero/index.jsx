import React, { useState } from 'react';
import GifImg from '../../assets/hero-gif.gif';
import LogoImg from '../../assets/logo-dark.svg';
import { roleList } from '../../utils';
import { Link } from 'react-router-dom';

const tabs = ['IT & Development', 'Design & Creative'];

const Hero = () => {
	const [activeTab, setActiveTab] = useState(tabs[0]);

	return (
		<section className="flex justify-center mt-20">
			<div className="w-full text-textDark flex flex-col items-center gap-10">
				<h1 className="max-w-3xl md:text-5xl text-3xl font-bold lg:leading-[64px] text-center">
					Finding the right fit <img src={GifImg} alt="Gif" className="w-16 inline" /> has never been easier.
				</h1>
				<p className="md:text-[22px] text-lg mg:leading-[32px] max-w-[582px] text-center">
					With our rigorous pre-vetting process, you'll never have to worry about finding the ideal candidate ever
					again.
				</p>
				<div className="flex  md:h-[74px] w-full max-w-[570px] relative">
					<div className="h-full bg-white border-[1.5px] border-[#F0F0F0] border-r-0 rounded-2xl rounded-e-none py-3 pl-3 flex items-center text-nowrap relative left-2 font-semibold">
						Looking for
					</div>
					<input
						type="text"
						placeholder="design |"
						className="input w-full h-full bg-white border-[1.5px] border-[#F0F0F0] border-l-0 rounded-e-none focus:outline-none"
					/>
					<button className="btn h-full bg-secondary border-none hover:bg-secondary w-[74px] rounded-2xl relative right-3">
						<img src={LogoImg} alt="Logo image" />
					</button>
				</div>

				<div className="w-full max-w-[920px] bg-[#F8F8F8] rounded-2xl flex flex-col items-center p-5">
					<div role="tablist" className="tabs max-w-[400px] mb-5">
						{tabs.map((tab, i) => (
							<a
								key={i}
								role="tab"
								// onClick={() => setActiveTab(tab)}
								className={`tab rounded-2xl h-[44px] text-textDark font-semibold pr-5 ${
									activeTab === tab ? 'tab-active bg-[#C7F4C2]' : 'bg-[#D2D2D2] opacity-15'
								} ${i === 1 ? 'right-2 rounded-l-none' : 'z-10'}`}
							>
								{tab}
							</a>
						))}
					</div>

					<div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full lg:pl-20">
						{roleList.map((role, i) => (
							<Link to="/" key={i} className="text-textGray text-left hover:font-medium hover:text-textDark text-sm md:text-base">
								{role}
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
