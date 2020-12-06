import React from 'react';

function Map() {
    return (
        <div id="mapid" style={{height: 320}}>
            map
        </div>
    );
}

const mymap = L.map('mapid').setView([51.505, -0.09], 13);

export default Map;
