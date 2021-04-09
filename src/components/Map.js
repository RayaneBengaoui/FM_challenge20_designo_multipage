import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

const Map = ({ x, y, country, office, adress, contactP, contactM }) => {
  return (
    <MapStyle>
      <MapContainer center={[x, y]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
          position={[x, y]}
        ></Marker>
      </MapContainer>
      <MapInformation>
        <h2>{country}</h2>
        <TextContainer className="adressText">
          <p className="bold">{office}</p>
          <p>{adress}</p>
        </TextContainer>
        <TextContainer>
          <p className="bold">Contact</p>
          <p>{contactP}</p>
          <p>{contactM}</p>
        </TextContainer>
      </MapInformation>
    </MapStyle>
  );
};

const MapStyle = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
  margin-bottom: 2.5rem;

  .leaflet-container {
    width: 100%;
    height: 20rem;
  }
`;

const MapInformation = styled.div`
  width: 100%;
  min-height: 24.5rem;
  background-color: #fdf3f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    color: #e7816b;
  }

  p {
    text-align: center;
    max-width: 190px;
  }

  span {
    font-weight: bold;
  }

  .adressText {
    padding: 1.5rem 0rem;
  }

  .leaflet-container {
    width: 100%;
    height: 50vh;
  }
`;

const TextContainer = styled.div`
  .bold {
    font-weight: bold;
  }
`;

export default Map;
