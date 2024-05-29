import React from 'react'

const LeftSection = ({item}) => {
  return (
		<div className="">
			<p className="text-lg md:text-2xl font-medium mb-4">{item.title}</p>
			<div className="flex lg:justify-between flex-wrap gap-5 text-[#202229CC]">
				{item.items.map((s, i) => (
					<span key={i} className="flex items-center gap-2">
						<img src={s.icon} alt={s.text} />
						{s.text}
					</span>
				))}
			</div>
		</div>
	);
}

export default LeftSection;