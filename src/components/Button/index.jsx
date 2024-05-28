import React from 'react';
import LogoDark from '../../assets/logo-dark.svg';

const Button = ({ image, className, imageStyle }) => {
	return (
		<button
			className={`btn bg-secondary border-none hover:bg-transparent w-[74px] h-[74px] rounded-3xl relative right-3 ${className}`}
		>
			<img src={image ? image : LogoDark} alt="Logo image" className={imageStyle} />
		</button>
	);
};

export default Button;
