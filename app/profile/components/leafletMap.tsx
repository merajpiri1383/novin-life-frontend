'use client';
import { FC, useEffect } from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import L, { Control, ControlOptions } from 'leaflet';
import 'leaflet-control-geocoder';

type Props = {
  height?: string;
  show_search?: boolean;
};

/**
 * Our combined type: extends Leaflet's Control so
 * removeControl accepts it, but also declares .on() and .addTo().
 */
interface GeocoderControlType extends Control<ControlOptions> {
  on(
    evt: 'markgeocode',
    fn: (e: { geocode: { bbox: [[number, number], [number, number]] } }) => void
  ): this;
  addTo(map: ReturnType<typeof useMap>): this;
}

const GeoCoderControl: FC = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // Cast L.Control to unknown, then assert the .geocoder signature
    const controlModule = (L.Control as unknown) as {
      geocoder(opts: { defaultMarkGeocode: boolean }): GeocoderControlType;
    };

    // Create the control, chain .on + .addTo, and keep it typed as a Control
    const geocoderControl = controlModule
      .geocoder({ defaultMarkGeocode: true })
      .on('markgeocode', (e) => {
        const bbox = e.geocode.bbox;
        const bounds = L.latLngBounds(bbox);
        map.fitBounds(bounds);
      })
      .addTo(map);

    return () => {
      map.removeControl(geocoderControl);
    };
  }, [map]);

  return null;
};

const LeafletMap: FC<Props> = ({
  height = '400px',
  show_search = false,
}) => (
  <MapContainer
    center={[35.6892, 51.389]}
    zoom={13}
    style={{ height, width: '100%' }}
  >
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Marker position={[35.6892, 51.389]}>
      <Popup>تهران، ایران</Popup>
    </Marker>
    {show_search && <GeoCoderControl />}
  </MapContainer>
);

export default LeafletMap;