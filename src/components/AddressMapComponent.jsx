import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';

// Access the API key from Vite's environment variables
const geoapifyApiKey = import.meta.env.VITE_GEOAPIFY_API_KEY;

const AddressMapComponent = () => {
  const [location, setLocation] = useState(null);

  const onPlaceSelect = (place) => {
    const { lat, lon } = place?.geometry?.coordinates || {};
    setLocation({ lat, lon });
  };

  return (
    <GeoapifyContext apiKey={geoapifyApiKey}>
      <div style={{ height: '500px' }}>
        <GeoapifyGeocoderAutocomplete
          placeholder="Enter address here"
          biasByLocation={{ lat: 20.5937, lon: 78.9629 }} // Center bias on India
          filterByCountryCode="IN" // Filter by India
          onPlaceSelect={onPlaceSelect}
        />
        <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '500px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />
          {location && (
            <Marker position={[location.lat, location.lon]}>
              <Popup>
                Selected Location: {location.lat}, {location.lon}
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </GeoapifyContext>
  );
};

export default AddressMapComponent;
