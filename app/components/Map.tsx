'use client';

import L from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { FC } from 'react';

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
});
type MapProps = {
    center: Number[]
}

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
const arbitration = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

const Map: FC<MapProps> = ({ center }) => {
    return (
        <div>
            <MapContainer center={center as L.LatLngExpression || [51, -0.09]}
                zoom={center ? 4 : 2}
                scrollWheelZoom={false}
                className="h-[35vh] rounded-lg"
            >
                <TileLayer
                    attribution={arbitration}
                    url={url}
                />
                {center &&
                    <Marker position={center as L.LatLngExpression} />
                }
            </MapContainer>
        </div>
    )
}

export default Map