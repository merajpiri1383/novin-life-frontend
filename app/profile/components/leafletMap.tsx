'use client';
import { FC } from 'react';
import { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import L from 'leaflet';
import 'leaflet-control-geocoder'

type Props = {
    height?: string,
    show_search ?: boolean,
}


const GeoCoderControl = () => {
    const map = useMap();

    useEffect(() => {
        if (!map) null;
        const geocoder = (L.Control as any).geocoder({
            defaultMarkGeocode: true,
        })
            .on('markgeocode', function (e: any) {
                const bbox = e.geocode.bbox;
                const bounds = L.latLngBounds(bbox);
                map.fitBounds(bounds);
            })
            .addTo(map);

        return () => {
            map.removeControl(geocoder);
        };
    }, [map]);
    return null;
}

const LeafletMap: FC<Props> = ({ height = '400px',show_search = false }) => {
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
            {
                show_search && <GeoCoderControl />
            }
        </MapContainer>
    )
}; export default LeafletMap;