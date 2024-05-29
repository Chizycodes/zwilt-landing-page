import React from 'react';
import One from '../../assets/one.svg';
import Two from '../../assets/two.svg';
import Three from '../../assets/three.svg';
import Group1 from '../../assets/group1.svg';
import Group2 from '../../assets/group2.svg';
import Group3 from '../../assets/group3.svg';
import AnimatedBtn from '../Button/AnimatedBtn';

const JourneyList = [
	{
		image: One,
		title: 'Find your next star performer.',
		description: 'Explore the vast Zwilt marketplace to find the candidate that meets your needs.',
		buttonText: 'Join Now',
		color: '#EDEFFF',
		groupImg: Group1,
	},
	{
		image: Two,
		title: 'Evaluate to your heart’s content.',
		description: 'Assess the candidate through work history, transparent tests and video interviews.',
		buttonText: 'Browse More',
		color: '#FFF7E0',
		groupImg: Group2,
	},
	{
		image: Three,
		title: 'Start building your team.',
		description: 'Onboard your candidate right away and start creating the next big thing.',
		buttonText: 'Join Now',
		color: '#F2F2F3',
		groupImg: Group3,
	},
];

const StartJourney = () => {
	return (
		<div className="md:py-20">
			<h1 className="md:text-5xl text-3xl font-bold mb-8 text-center">Start your journey today.</h1>

			{JourneyList.map((item, i) => (
				<div
					key={i}
					className={`slanted-border py-5 md:py-0 px-3 md:pl-7 md:pr-0 flex justify-between mb-2`}
					style={{ backgroundColor: item.color }}
				>
					<div className="flex gap-5 px-3 py-5 md:mt-4 md:py-16">
						<img src={item.image} alt={item.title} className="h-14 md:h-[83px]" />
						<div className="max-w-sm flex flex-col gap-6">
							<h1 className="md:text-4xl text-xl font-bold">{item.title}</h1>
							<p className="text-base text-textGray">{item.description}</p>

							<AnimatedBtn
								logoDark={false}
								text={item.buttonText}
							/>
						</div>
					</div>

					<div className="h-full hidden md:block">
						<img src={item.groupImg} alt="one" className="h-full" />
					</div>
				</div>
			))}
		</div>
	);
};

export default StartJourney;
