import React from 'react';
import LogoDark from '../../assets/logo-dark.svg';

const Button = ({ image, className, imageStyle, bg }) => {
	return (
		<button className={`btn border-none w-[74px] h-[74px] rounded-3xl ${className} ${bg} hover:bg-lightPurple`}>
			<img src={image ? image : LogoDark} alt="Logo image" className={imageStyle} />
		</button>
	);
};

export default Button;
