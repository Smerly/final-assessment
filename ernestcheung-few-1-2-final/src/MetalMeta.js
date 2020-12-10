import data from './metal.json';
import './Heading.css';

let bandNumber = data.length;

function MetalMeta() {
	return (
		<div className="margin">
			<h2> Metal Bands </h2>
			<header> Bands: {bandNumber}</header>
		</div>
	);
}

export default MetalMeta;
