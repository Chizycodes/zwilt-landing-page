import React from 'react';
import LogoDark from '../../assets/logo-dark.svg';
import LogoLight from '../../assets/logo-purple.svg';

const Button = ({ logoDark = true, className, imageStyle, bg, text = '', textStyle = '' }) => {
	return (
		<div className="flex items-center cursor-pointer">
			<button className={`btn border-none w-[74px] h-[74px] rounded-3xl mr-4 ${className} ${bg} hover:bg-lightPurple`}>
				<img src={logoDark ? LogoDark : LogoLight} alt="Logo image" className={imageStyle} />
			</button>
			{text && <span className={`text-textDark ${textStyle}`}>{text}</span>}
		</div>
	);
};

export default Button;
