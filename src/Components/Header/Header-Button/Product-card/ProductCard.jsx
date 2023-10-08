import styled from "styled-components";
import ProductBtn from "./ProductBtn";

const ProductCard = ({ item }) => {
  console.log(item);

  return (
    <div>
      <Main>
        <div className="left">
          <img src={item.Image} alt="image" className="left-img" />
        </div>

        <div className="right">
          <div>
            <h3 className="heading">{item.heading}</h3>
          </div>

          <div>
            <p className="para">{item.Description}</p>
          </div>
          <div className="btn">
            <ProductBtn />
          </div>
        </div>
      </Main>
    </div>
  );
};

export default ProductCard;
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;

  .card {
    display: flex;
    align-items: center;
    gap: 20px;
    text-align: left;
    background-color: #ffffff;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: hidden;
  }

  .card-img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }

  .card-content {
    flex: 1;
    padding: 20px;
  }

  .counter {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .counter-icon {
    font-size: 24px;
    color: #333;
  }

  .counter-number {
    font-size: 28px;
    color: #333;
    font-weight: bold;
  }

  .heading {
    font-size: 35px;
    color: #333;
    font-weight: bold;
    text-transform: uppercase;
  }

  .para {
    color: #333;
    font-size: 18px;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    .card {
      flex-direction: column;
      text-align: center;
    }

    .card-img {
      width: 150px;
      height: 150px;
      margin-bottom: 20px;
    }
  }
`;
