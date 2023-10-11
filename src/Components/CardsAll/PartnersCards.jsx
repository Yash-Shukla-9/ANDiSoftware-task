import { Link } from "react-router-dom";
import styled from "styled-components";

const PartnersCards = ({ item }) => {
  return (
    <Cards>
      <Left>
        <img src={item.Image} alt="Partner Logo" className="imglogo" />
      </Left>

      <Right>
        <Heading>{item.heading}</Heading>
        <Location>{item.location}</Location>

        <Website>
          <Link to={item.Website}>{item.Website}</Link>
        </Website>
      </Right>
    </Cards>
  );
};

export default PartnersCards;

const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 20px auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  flex-direction: column;
  width: 700px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const Left = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center; /* Center-align text on smaller screens */
`;

const Heading = styled.div`
  font-weight: 500;
  font-size: 22px;
  text-align: center; /* Center-align text on smaller screens */
`;

const Location = styled.div`
  font-size: 18px;
  text-align: center; /* Center-align text on smaller screens */
`;

const Website = styled.div`
  a {
    color: blue;
    font-size: 20px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
