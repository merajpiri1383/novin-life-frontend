'use client';                            // ← must be first line
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FC } from 'react';

type Props = {
    height ?: string,
}

const LeafletMap : FC<Props> = ({ height = '400px' }) => {
    return (
        <MapContainer
            center={[35.6892, 51.3890]}
            zoom={13}
            style={{ height: height, width: '100%' }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[35.6892, 51.3890]}>
                <Popup>تهران، ایران</Popup>
            </Marker>
        </MapContainer>
    )
}; export default LeafletMap;