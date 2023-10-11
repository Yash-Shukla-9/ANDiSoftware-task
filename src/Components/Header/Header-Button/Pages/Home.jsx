import styled from "styled-components";
import OurService from "../Header Head Our service/OurService";
import AboutData from "./Data/About";

const Home = () => {
  return (
    <Homee>
      <OurService name="About Us" />

      <Aboutt>
        {AboutData.map((item, index) => {
          return (
            <AboutItem key={index}>
              <Heading>
                {item.heading} <div className="line"></div>{" "}
              </Heading>
              <Description>{item.para}</Description>
            </AboutItem>
          );
        })}
      </Aboutt>
    </Homee>
  );
};

export default Home;

const Homee = styled.div`
  padding: 20px;

  .line {
    border-bottom: 2px solid blue;
    width: 60px;
    padding: 4px 0;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Aboutt = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const AboutItem = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Heading = styled.h3`
  font-size: 24px;
  color: #333;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  color: #555;
  font-size: 18px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
