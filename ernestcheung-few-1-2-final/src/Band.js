import React from 'react';
import data from './metal.json';
import react, { Component } from 'react';
import './Band.css';
import Like from './Like';
function Band(props) {
	const { band_name, formed, origin, fans } = props;
	return (
		<div className="Band">
			<div className="BandInside">
				<h1>{band_name}</h1>

				<div>Formed: {formed}</div>

				<div>{origin}</div>

				<div>Fans: {fans}</div>
				<Like />
			</div>
		</div>
	);
}

export default Band;
