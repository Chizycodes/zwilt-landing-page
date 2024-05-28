import React from 'react';
import LogoYellow from '../../assets/logo-yellow.svg';

const faqs = [
	'I want to work part-time, is that possible',
	'How long are the average projects?',
	'How does the payment works?',
	'How much can I earn?',
];

const Faq = () => {
	return (
		<section className="text-textDark bg-[#F3F3F3] min-h-screen slanted-border relative bottom-5 md:bottom-14 py-20">
			<div className="section px-8">
				<h1 className="md:text-5xl text-3xl text-center font-bold mb-10 lg:mb-20">Frequently asked questions</h1>

				<div className="flex flex-col">
					{['General', 'Joining Process'].map((item, i) => (
						<div key={i}>
							{faqs.map((faq, i) => (
								<div key={i} className={'flex group'}>
									<div
										className={`md:w-[20%] py-7 px-3 text-center border border-[#D6D6D6] group-hover:bg-[#E8E8E8] ${
											i !== 0 && 'border-r-0'
										}`}
									>
										{i === 0 && item}
									</div>
									<div
										className={`px-3 border border-[#D6D6D6] w-full py-7 text-center hover:bg-[#E8E8E8] cursor-pointer relative ${
											i !== 0 && 'border-l-0'
										}`}
									>
										<p className="text-base group-hover:font-bold">{faq}</p>
										<img
											src={LogoYellow}
											alt="pointer"
											className={`absolute right-8 bottom-[40%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block`}
										/>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Faq;
