import styled from "styled-components";
import OurService from "../Header Head Our service/OurService";
import ProductBtn from "../Product-card/ProductBtn";

const DigitalMarketing = () => {
  return (
    <Digital>
      <OurService name="OUR SERVICES" />
      <div className="main">
        <div className="left">
          <img src="https://andisoftwaresolutions.com/53.jpg" alt="" />
        </div>

        <div className="right">
          <div className="head">Digital Marketing</div>
          <div className="para">
            <p>
              Digital Marketing is a segment of internet marketing. It helps in
              the utilization of social networking websites as a marketing tool.
              The aim of Digital Marketing is to produce content that users will
              share with their social network to help a company. It helps
              increase brand exposure and broaden customer reach.
            </p>
          </div>
          <div>
            <ProductBtn />
          </div>
        </div>
      </div>
    </Digital>
  );
};

export default DigitalMarketing;

const Digital = styled.div`
  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    background-color: #f2f8fe;
    border-radius: 10px;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 40px;
    }

    .left {
      width: 100%;
      max-width: 300px;

      & > img {
        width: 100%;
        height: auto;
        border-radius: 10px;

        @media (max-width: 768px) {
          max-width: 300px;
        }
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      gap: 20px;
      text-align: center;

      .head {
        font-size: 24px;
        color: #333;
        font-weight: bold;
        text-transform: uppercase;
      }

      .para {
        font-size: 18px;
        line-height: 1.5;
        color: #555;
        @media (max-width: 768px) {
          font-size: 16px;
        }
      }
    }
  }
`;
