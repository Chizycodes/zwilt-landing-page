import React, { useState } from 'react';
import GifImg from '../../assets/hero-gif.gif';
import LogoImg from '../../assets/logo-dark.svg';
import { roleList } from '../../utils';

const tabs = ['IT & Development', 'Design and Creative'];

const Hero = () => {
	const [activeTab, setActiveTab] = useState(tabs[0]);

	return (
		<div className="flex justify-center mt-20">
			<div className="w-full text-textDark flex flex-col items-center gap-10">
				<h1 className="max-w-3xl text-6xl font-bold leading-[64px]">
					Finding the right fit <img src={GifImg} alt="Gif" className="w-16 inline" /> has never been easier.
				</h1>
				<p className="text-[22px] leading-[32px] max-w-[582px] text-center">
					With our rigorous pre-vetting process, you'll never have to worry about finding the ideal candidate ever
					again.
				</p>
				<div className="flex h-[74px] w-full max-w-[570px] relative">
					<input
						type="text"
						placeholder="Looking for design |"
						className="input w-full h-full bg-white border-[1.5px] border-[#F0F0F0] rounded-2xl rounded-e-none"
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
								className={`tab rounded-2xl h-[44px] text-textDark font-semibold px-5 ${
									activeTab === tab ? 'tab-active bg-[#C7F4C2]' : 'bg-[#D2D2D2] opacity-15'
								} ${i === 1 ? 'right-2 rounded-l-none' : 'z-10'}`}
							>
								{tab}
							</a>
						))}
					</div>

					<div className="grid grid-cols-2 lg:grid-cols-3 gap-3 w-full lg:pl-20">
						{roleList.map((role, i) => (
							<p key={i} className="text-textGray text-left">
								{role}
							</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
