import React from 'react';
import Quote from '../../assets/quote.svg';
import Jason from '../../assets/jason.svg';
import Groove from '../../assets/groovehq.svg';
import GrooveWhite from '../../assets/groove-white.svg';
import Button from '../Button';

const Testimonial = () => {
	return (
		<div className="w-full flex bg-textDark min-h-screen slanted-border relative bottom-5 lg:bottom-16">
			<div className="section hero px-8">
				<img src={Quote} alt="quote" className="absolute top-2 right-3" />
				<div className="hero-content px-0 text-white justify-between w-full flex-col lg:flex-row">
					<div className="text-center lg:text-left max-w-md flex flex-col gap-10">
						<h1 className="md:text-5xl text-3xl font-bold">
							How it worked <br /> for Jason <img src={Jason} alt="Jason" className="w-12 inline" /> at <br />
							<img src={Groove} alt="groove" className="inline mt-2 w-36 md:w-auto" />
						</h1>
						<p className="md:text-xl text-textGray">
							Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since.
						</p>

						<div>
							<Button className="bg-white mr-4" imageStyle="rotate-180" />
							<Button className="bg-white" />
						</div>
					</div>

					<div className="max-w-lg mt-10">
						<div className="flex items-center gap-2">
							<div className="md:w-[98px] md:h-[98px] w-[78px] h-[78px] md:rounded-[40px] rounded-[28px] bg-darkPurple flex items-center justify-center">
								<img src={GrooveWhite} alt="groove white" className='w-14 md:w-auto' />
							</div>
							<div>
								<p className="md:text-3xl text-xl font-bold mb-1">Jason Makki</p>
								<p className="text-textGray mb-1">Engineer at GROOVE</p>
								<p className="text-textGray">San Francisco</p>
							</div>
						</div>
						<p className="md:text-xl mt-10 text-textGray">
							Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since. Zwilt enabled us
							to deliver on time and they’ve been heavy hitters in our corner since.Zwilt enabled us to deliver on time
							and they’ve been heavy hitters.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
