import styled from "styled-components";

const MapWrapper = styled.div`
  width: 500px;
  height: 400px;
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const GoogleMap = ({ mapUrl }) => {
  return (
    <MapWrapper>
      <iframe
        title="Location Map"
        src={mapUrl}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </MapWrapper>
  );
};

export default GoogleMap;
