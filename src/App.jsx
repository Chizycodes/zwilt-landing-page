import './App.css';
import { NavBar, Hero } from './components';
import UnionImg from './assets/union.svg';

function App() {
	return (
		<>
			<div className="max-w-[1280px] mx-auto pt-8">
				<NavBar />
				<Hero />
			</div>
			<img src={UnionImg} alt="Seperator" className="mt-20 w-full" />
		</>
	);
}

export default App;
