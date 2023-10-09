import styled from "styled-components";
import OurService from "../Header Head Our service/OurService";

const OurClient = () => {
  return (
    <ClientContainer>
      <OurService name="Our Clients" />

      <ImageGrid>
        <ImageBox>
          <img src="https://andisoftwaresolutions.com/80.jpg" alt="" />
        </ImageBox>

        <ImageBox>
          <img src="https://andisoftwaresolutions.com/79.jpg" alt="" />
        </ImageBox>

        <ImageBox>
          <img src="https://andisoftwaresolutions.com/78.jpg" alt="" />
        </ImageBox>

        <ImageBox>
          <img src="https://andisoftwaresolutions.com/91.jpg" alt="" />
        </ImageBox>
      </ImageGrid>

      <ImageGrid>
        <ImageBox>
          <img src="https://andisoftwaresolutions.com/87.jpg" alt="" />
        </ImageBox>

        <ImageBox>
          <img src="https://andisoftwaresolutions.com/88.jpg" alt="" />
        </ImageBox>

        <ImageBox>
          <img src="https://andisoftwaresolutions.com/89.jpg" alt="" />
        </ImageBox>

        <ImageBox>
          <img src="https://andisoftwaresolutions.com/90.jpg" alt="" />
        </ImageBox>
      </ImageGrid>
    </ClientContainer>
  );
};

export default OurClient;

const ClientContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  margin-top: 50px;
  background-color: #f8f0f0;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const ImageGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 150px;
  margin: 20px 0;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 10px;
  }
`;

const ImageBox = styled.div`
  img {
    width: 120px;
    height: 120px;
    object-fit: contain;
    border: 3px solid #fff;

    border-radius: 10px;

    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }
  }

  @media (max-width: 768px) {
    img {
      width: 80px;
      height: 80px;
    }
  }
`;
