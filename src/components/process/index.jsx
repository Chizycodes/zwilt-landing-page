import React, { useState } from 'react';
import { processList } from '../../utils';
import PlayIconDark from '../../assets/play.svg';
import PlayIconWhite from '../../assets/play-white.svg';
import StartJourney from './StartJourney';

const Process = () => {
	const [openItemId, setOpenItemId] = useState(null);

	const handleToggle = (id) => {
		setOpenItemId((prevId) => (prevId === id ? null : id));
	};

	return (
		<section className="section px-8 text-textDark">
			<div className="max-w-[635px] py-20">
				<h1 className="md:text-5xl text-3xl font-bold mb-5">How we ensure you’re in good hands.</h1>
				<p className="md:text-[22px] text-base md:leading-8 text-[#1E1515CC] mb-5">
					With our comprehensive screening process, we hand-pick highly skilled candidates so you can onboard them in a
					matter of days.
				</p>

				{processList.map((item) => (
					<div key={item.id} className="collapse bg-white border border-[#F0F0F0] mb-2">
						<input
							type="radio"
							name="my-accordion-3"
							checked={openItemId === item.id}
							onChange={() => handleToggle(item.id)}
						/>
						<div className="collapse-title text-xl font-medium flex items-center gap-4">
							<div
								className={`w-[54px] h-[54px] rounded-full flex items-center justify-center ${
									openItemId === item.id ? 'bg-[#8BA4FD]' : 'bg-[#ECECEC]'
								}`}
							>
								<img src={openItemId === item.id ? PlayIconWhite : PlayIconDark} alt="play icon" className="" />
							</div>
							<p className="text-base">
								<span className="font-semibold">Step {item.id}: </span>
								{item.title}
							</p>
						</div>
						<div className="collapse-content text-base">
							<p>{item.description}</p>
						</div>
					</div>
				))}
			</div>
			<div>
				<StartJourney />
			</div>
		</section>
	);
};

export default Process;
