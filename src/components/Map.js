import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

const scale = 8;

function Map({coordinates, name}) {
    const {first, last} = name;
    const position = [coordinates.latitude, coordinates.longitude];
    console.log(coordinates)
    console.log(position)
    return (
        <div style={{width: 360, height: 320}}>
            <MapContainer
                center={position}
                zoom={scale}
                style={{width: 360, height: 320}}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker
                    position={position}
                >
                    <Popup>
                        {`${first} ${last}`}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default Map;
