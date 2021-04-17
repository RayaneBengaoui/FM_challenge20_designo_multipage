import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

import smallCircle_bg from "../assets/shared/desktop/bg-pattern-small-circle.svg";
import twoCircles_bg from "../assets/shared/desktop/bg-pattern-two-circles.svg";

const Map = ({
  x,
  y,
  country,
  office,
  adress,
  contactP,
  contactM,
  flexDir,
}) => {
  const key = process.env.REACT_APP_MAPBOX_KEY;
  const tileOpenMap = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${key}`;

  return (
    <MapStyle flexDir={flexDir}>
      <MapContainer center={[x, y]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
          url={tileOpenMap}
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
        <div>
          <h2>{country}</h2>
          <TextContainer className="adressText">
            <p className="bold">{office}</p>
            <p>{adress}</p>
          </TextContainer>
        </div>
        <TextContainer className="contactText">
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

  @media screen and (min-width: 700px) {
    border-radius: 15px;
    overflow: hidden;
  }
  @media screen and (min-width: 1250px) {
    max-width: 1111px;
    margin: auto;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: ${(props) =>
      props.flexDir === "reverse" ? "row-reverse" : "row"};
    justify-content: space-between;
    max-height: 326px;

    .leaflet-container {
      border-radius: 15px;
      flex-basis: 35%;
    }
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
  background-repeat: no-repeat;
  background-size: 60%;
  background-image: url(${smallCircle_bg});

  h2 {
    color: #e7816b;
    text-align: center;
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

  @media screen and (min-width: 700px) {
    border-radius: 15px;
    overflow: hidden;
    margin-top: 2rem;
    flex-direction: row;
    background-image: url(${twoCircles_bg});
    background-size: 85%;
    background-position: 50%;

    p {
      text-align: left;
    }

    h2 {
      text-align: left;
    }
    .contactText {
      height: 147px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin-left: 6rem;
    }
  }

  @media screen and (min-width: 1250px) {
    margin-top: unset;
    flex-basis: 62%;
    border-radius: 15px;
    overflow: hidden;
    min-height: unset;
  }
`;

const TextContainer = styled.div`
  .bold {
    font-weight: bold;
  }
`;

export default Map;
