import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import MetalMeta from './MetalMeta';
import Band from './Band';
import BandList from './BandList';
function App() {
	return (
		<div className="bg">
			<Heading />
			<MetalMeta />
			<BandList />
		</div>
	);
}

export default App;
