import React from 'react';
import data from './metal.json';
import Band from './Band';
function BandList() {
	const spaces = data.map(({ band_name, formed, origin, fans }, i) => {
		return (
			<div className="BandList">
				<Band
					band_name={band_name}
					key={band_name}
					formed={formed}
					origin={origin}
					fans={fans}
				/>
			</div>
		);
	});

	return <div className="Bandgrid">{spaces}</div>;
}

export default BandList;
