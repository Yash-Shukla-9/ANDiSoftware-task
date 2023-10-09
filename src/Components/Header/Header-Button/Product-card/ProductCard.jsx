import styled from "styled-components";
import ProductBtn from "./ProductBtn";

const ProductCard = ({ item }) => {
  return (
    <Main>
      <Card>
        <Left>
          <img src={item.Image} alt="Product" className="card-img" />
        </Left>
        <Right>
          <Heading>{item.heading}</Heading>
          <Description>{item.Description}</Description>
          <Button>
            <ProductBtn />
          </Button>
        </Right>
      </Card>
    </Main>
  );
};

export default ProductCard;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  text-align: left;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  max-width: 600px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 768px) {
    ${Card} {
      padding: 10px;
    }

    ${Right} {
      text-align: center;
    }
  }
`;

const Left = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Heading = styled.h3`
  font-size: 24px;
  color: #333;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: #555;
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const Button = styled.div`
  text-align: right;
`;
