import React from 'react';
import Button from '../Button';

const RightSection = ({ skill }) => {
	return (
		<div className="bg-white rounded-lg p-7">
			<p className="mb-5 font-medium">{skill.title}</p>
			<div className="flex items-start gap-5 carousel w-full">
				{skill.id === 1 && (
					<Button className="rotate-180 carousel-item" bg="bg-lightGray" />
				)}

				{skill.skills.map((s, i) => (
					<div key={i} className="flex flex-col flex-wrap items-center gap-2 carousel-item">
						<div className="w-[76px] h-[76px] lg:w-[86px] lg:h-[86px] rounded-full flex items-center justify-center bg-[#F6F6F6]">
							<img src={s.icon} alt={s.text} />
						</div>
						<p className="text-sm max-w-[50px] text-center">{s.text}</p>
					</div>
				))}

				{skill.id === 0 && (
					<Button className="carousel-item" bg="bg-lightGray" />
				)}
			</div>
		</div>
	);
};

export default RightSection;
