import './App.css';
import { NavBar, Hero, Section2, Testimonial } from './components';
import UnionImg from './assets/union.svg';

function App() {
	return (
		<>
			<div className="max-w-7xl mx-auto p-8">
				<NavBar />
				<Hero />
			</div>
			<img src={UnionImg} alt="Seperator" className="mt-20 w-full" />
			<Section2 />
			<Testimonial />
		</>
	);
}

export default App;
