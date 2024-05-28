import './App.css';
import { NavBar, Hero, Section2, Testimonial, Process, WhyZwilt, Faqs, Footer } from './components';
import UnionImg from './assets/union.svg';

function App() {
	return (
		<>
			<div className="section p-8">
				<NavBar />
				<Hero />
			</div>
			<img src={UnionImg} alt="Seperator" className="mt-20 w-full" />
			<Section2 />
			<Testimonial />
			<Process />
			<WhyZwilt />
			<Faqs />
			<Footer />
		</>
	);
}

export default App;
