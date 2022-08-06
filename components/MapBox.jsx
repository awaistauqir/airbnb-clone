import { useState } from 'react';
import ReactMapGl, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';
import 'mapbox-gl/dist/mapbox-gl.css';
const MapBox = ({ searchResults }) => {
	const coordinates = searchResults.map((item) => {
		return {
			latitude: item.lat,
			longitude: item.long,
		};
	});
	const center = getCenter(coordinates);
	const [selectedLocation, setSelectedLocation] = useState({});
	const [viewport, setViewPort] = useState({
		height: '100%',
		width: '100%',
		longitude: center.longitude,
		latitude: center.latitude,
		zoom: 8,
	});
	return (
		<ReactMapGl
			mapStyle={'mapbox://styles/awaistauqir1/cl6gpafds002h15o9e90myj6c'}
			mapboxAccessToken={process.env.mapbox_key}
			{...viewport}
			// onViewPortChange={(nextViewPort) => setViewPort(nextViewPort)}
			onMove={(evt) => setViewPort(evt.viewState)}
		>
			<Marker longitude={-100} latitude={40} anchor="bottom">
				<p className="text-4xl">lahore</p>
			</Marker>
			{searchResults.map((result) => (
				<div key={result.lat}>
					<Marker
						longitude={result.long}
						latitude={result.lat}
						key={result.lat}
						anchor="bottom"
					>
						<p
							role={'img'}
							className="text-2xl animate-bounce cursor-pointer"
							onClick={() => {
								setTimeout(() => {
									setSelectedLocation(result.title);
								}, 0);
								console.log(selectedLocation);
								// console.log('clicked', selectedLocation, result);
							}}
							aria-label={'push-pin'}
						>
							📍
						</p>
					</Marker>
					{/* <Popup
						closeOnClick={true}
						onClose={() => setSelectedLocation({})}
						longitude={result.long}
						latitude={result.lat}
					>
						{result.title}
					</Popup> */}
					{selectedLocation === result.title ? (
						<Popup
							closeOnClick={true}
							onClose={() => setSelectedLocation('')}
							longitude={result.long}
							latitude={result.lat}
						>
							{result.title}
						</Popup>
					) : (
						false
					)}
				</div>
			))}
		</ReactMapGl>
	);
};

export default MapBox;
