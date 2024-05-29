import React from 'react';
import OnboardImg from '../../assets/onboard.svg';
import Image2 from '../../assets/Chatbar.png';
import Image3 from '../../assets/Tracking.png';
import WhyCard from './WhyCard';

const CardData = [
	{
		title: 'Onboard without the risk.',
		list: [
			'We pick the best for you to select.',
			'Thousands of vetted candidates in dozens of categories.',
			'Risk-free resource swapping for the best fit.',
		],
		color: '#50589F',
		image: OnboardImg,
	},
	{
		title: 'An open book.',
		list: [
			'Easy and transparent one-to-one chat with candidates.',
			'Simple and convenient payment methods.',
			'Review past ratings',
		],
		color: '#FFBE2E',
		image: Image2,
	},
	{
		title: 'Stay in the loop.',
		list: [
			'Track your staff activity down to every minute with screenshots.',
			'Comprehensive timesheet data to process payments.',
			'Create projects to organize and assign tasks more effectively.',
		],
		color: '#C7F4C2',
		image: Image3,
	},
];

const index = () => {
	return (
		<section className="gradient-bg text-textDark md:min-h-screen slanted-border lg:flex py-20">
			<div className="section px-8 flex flex-col lg:flex-row lg:mt-0">
				<div className="max-w-[380px] mb-8 lg:hidden">
					<h1 className="md:text-5xl text-3xl font-bold mb-8">Why choose Zwilt?</h1>
					<p className="md:text-[22px] text-base md:leading-8 text-[#1E1515CC]">
						We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent
						pool.
					</p>
				</div>
				<div className="flex items-center gap-5 w-full carousel">
					<span className="carousel-item mr-20 hidden lg:block">
						<div className="max-w-[380px]">
							<h1 className="md:text-5xl text-3xl font-bold mb-8">Why choose Zwilt?</h1>
							<p className="md:text-[22px] text-base md:leading-8 text-[#1E1515CC]">
								We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified
								talent pool.
							</p>
						</div>
					</span>

					{CardData.map((card, i) => (
						<span key={i} className="carousel-item">
							<WhyCard data={card} />
						</span>
					))}
				</div>
			</div>
		</section>
	);
};

export default index;
