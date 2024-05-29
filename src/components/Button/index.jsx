import React from 'react';
import LogoDark from '../../assets/logo-dark.svg';
import LogoLight from '../../assets/logo-purple.svg';

const Button = ({ logoDark = true, className, imageStyle, bg, text = '', textStyle = '', image }) => {
	return (
		<div className="flex items-center cursor-pointer">
			<button
				className={`btn border-none w-[54px] h-[54px] md:w-[64px] md:h-[64px] rounded-3xl ${className} ${bg} hover:bg-lightPurple`}
			>
				<img src={image ? image : logoDark ? LogoDark : LogoLight} alt="Logo image" className={imageStyle} />
			</button>
			{text && <span className={`text-textDark font-medium ml-2 ${textStyle}`}>{text}</span>}
		</div>
	);
};

export default Button;
