import React from 'react';
import Point from './Point';
import Button from '../Button';

const dataCard = ({ data }) => {
	return (
		<div className="drop-shadow-card p-10 rounded-[20px] flex items-center justify-between bg-white">
			<div className="max-w-[450px] w-full">
				<p className="md:text-4xl text-xl font-bold mb-8">{data.title}</p>

				<div className="mb-8">
					{data.list.map((reason, i) => (
						<div key={i} className="flex items-center gap-3 mb-2 text-base">
							<Point color={data.color} />
							<span>{reason}</span>
						</div>
					))}
				</div>

				<Button text="Learn More" logoDark={false} />
			</div>

			<div>
				<img src={data.image} className="md:w-[520px] md:h-[520px] w-[300px] h-[300px]" alt="Onboard" />
			</div>
		</div>
	);
};

export default dataCard;
