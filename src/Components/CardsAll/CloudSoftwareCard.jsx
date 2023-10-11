import styled from "styled-components";

const CloudSoftwareCard = ({ data }) => {
  return (
    <Cloud>
      <Left>
        <img src={data.image} alt="" />
      </Left>

      <Right>
        <Heading>{data.heading}</Heading>
        <Para1>{data.text1}</Para1>
        <Para2>{data.text2}</Para2>

        <Price>{data.price}</Price>
      </Right>
    </Cloud>
  );
};

export default CloudSoftwareCard;

const Cloud = styled.div`
  display: flex;
  align-items: center;

  gap: 40px;
  background-color: #f5f5f5;
  margin-top: 30px;
  width: 1000px;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    width: 100%;
  }
`;

const Left = styled.div`
  /* width: 250px; */
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    width: 250px;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 15px;
  text-align: left;

  .head {
    font-size: 28px;
    font-weight: bold;
  }

  .text1 {
    font-size: 18px;
  }

  .text2 {
    font-size: 16px;
    color: grey;
  }

  .price {
    p {
      font-weight: 600;
      font-size: 18px;
      color: #007bff;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Heading = styled.h2`
  font-size: 28px;
  font-weight: bold;
  text-align: left;
  color: #333;
`;

const Para1 = styled.p`
  font-size: 18px;
  text-align: left;
  color: #555;
`;

const Para2 = styled.p`
  font-size: 16px;
  color: grey;
  text-align: left;
`;

const Price = styled.div`
  p {
    font-weight: 600;
    font-size: 18px;
    color: #007bff;
  }
`;
