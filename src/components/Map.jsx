import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import React from 'react'
import { useSelector } from 'react-redux';

export default function Map() {
    const data = useSelector((state) => state.receivingInfo);
    let position;
    if (data) {
        position = [data?.lat, data?.lng]
    } else {
        position = [40.7859408, -74.0400661]
    }
    return (
        <div>
            <MapContainer center={position} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={position}>
                    <Popup>
                        {data ? data?.city : 'SpaceX Starlink'}
                    </Popup>
                </Marker>
                <MyMap cords={position} />
            </MapContainer>
        </div>
    )
}

function MyMap({ cords }) {
    const map = useMap();
    map.setView(cords, map.getZoom());
    return null;
}