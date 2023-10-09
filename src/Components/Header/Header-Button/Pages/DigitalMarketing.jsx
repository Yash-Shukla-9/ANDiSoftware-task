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
          <div className="head">
            <div>Digital Marketing</div>
          </div>
          <div className="para">
            <p>
              Digital Marketing is a segment of internet marketing. It helps in
              the utilization of social <br /> networking websites as a
              marketing tool. Aim of Digital MARKETING is to produce content to{" "}
              <br />
              the users which they will share with their social network to help{" "}
              <br /> a company. It helps in increasing brand exposure and
              broaden customer reach.
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

    .left {
      & > img {
        width: 300px;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .head {
        font-size: 22px;
        text-align: center;
      }
    }
  }
`;
