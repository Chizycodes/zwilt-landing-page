import React from 'react';
import { Skills } from '../../utils';
import Button from '../Button';
import LogoPurple from '../../assets/logo-purple.svg';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const Section2 = () => {
	return (
		<section className="w-full bg-purpleBg py-20 lg:py-40 slanted-border relative lg:bottom-5">
			<div className="section px-8 text-textDark">
				<h1 className="md:text-5xl text-3xl text-center font-bold mb-10 lg:mb-20">
					Your one-stop marketplace for finding
					<br /> the talent your business needs.
				</h1>

				{Skills.map((skill, i) => (
					<div key={i} className="grid grid-cols-1 lg:grid-cols-6 gap-10 mb-10">
						<div className="lg:col-span-2 flex flex-col lg:justify-center lg:gap-16 gap-10">
							<LeftSection item={skill.leftSection} />
						</div>

						<div className="lg:col-span-4 lg:flex lg:flex-col lg:items-end">
							<div className="max-w-[700px] w-full flex flex-col gap-5">
								<RightSection skill={skill.rightSection} />
							</div>
						</div>
					</div>
				))}

				<div className="flex items-center justify-between gap-2 lg:gap-20 md:text-[22px]">
					<div className="flex items-center cursor-pointer">
						<Button className="bg-textDark w-[64px] h-[64px] lg:w-[74px] lg:h-[74px]" image={LogoPurple} />
						<span className="text-textDark">Explore More</span>
					</div>

					<div className="md:absolute md:left-[46.5%]">
						<p>
							30 more <span className="text-[#202229CC]">to explore</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section2;
