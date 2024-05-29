import React from 'react';
import LogoDark from '../../assets/logo-dark.svg';
import LogoLight from '../../assets/logo-purple.svg';

const AnimatedBtn = ({ logoDark = true, className, imageStyle, bg, text = '', textStyle = '', image }) => {
	return (
		<span className="flex items-center cursor-pointer group">
			<button
				className={`btn border-none w-[54px] h-[54px] md:w-[74px] md:h-[74px] rounded-2xl md:rounded-3xl flex items-center justify-center gap-5 transition-all duration-700 ease-linear ${className} ${bg}  relative group-hover:w-auto`}
			>
				<span
					className={`text-textDark font-medium ml-2 absolute group-hover:text-white group-hover:left-0 group-hover:relative group-hover:w-auto left-16 md:left-20 text-nowrap text-base md:text-xl transition-all duration-700 ease-linear ${textStyle}`}
				>
					{text}
				</span>
				<img src={image ? image : logoDark ? LogoDark : LogoLight} alt="Logo image" className={imageStyle} />
			</button>
		</span>
	);
};

export default AnimatedBtn;
