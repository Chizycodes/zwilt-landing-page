import React from 'react';

const RightSection = ({ skill }) => {
	return (
		<div className="bg-white rounded-lg p-5">
			<p className="mb-3 font-medium">{skill.title}</p>
			<div className="flex gap-5 overflow-x-auto">
				{skill.skills.map((s, i) => (
					<div key={i} className="flex flex-col flex-wrap items-center gap-2">
						<div className="w-[76px] h-[76px] lg:w-[96px] lg:h-[96px] rounded-full flex items-center justify-center bg-[#F6F6F6]">
							<img src={s.icon} alt={s.text} />
						</div>
						<p className="text-sm max-w-[50px] text-center">{s.text}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default RightSection;
