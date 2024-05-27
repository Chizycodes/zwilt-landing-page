import React from 'react';

const Button = ({ image, className }) => {
	return (
		<button
			className={`btn bg-secondary border-none hover:bg-secondary w-[74px] h-[74px] rounded-3xl relative right-3 ${className}`}
		>
			<img src={image} alt="Logo image" />
		</button>
	);
};

export default Button;
