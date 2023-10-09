import { Link } from "react-router-dom";
import styled from "styled-components";

const PartnersCards = ({ item }) => {
  return (
    <Cards>
      <div className="left">
        <img src={item.Image} className="imglogo" />
      </div>

      <div className="right">
        <div className="head">{item.headig}</div>

        <div>
          <p className="location">{item.location}</p>
        </div>

        <div>
          <div className="website">
            <Link to={item.Website}></Link>
            <a href="">{item.Website}</a>
          </div>
        </div>
      </div>
    </Cards>
  );
};

export default PartnersCards;

const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  margin: 20px;
  border: 0.5px solid black;

  .right {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .head {
      font-weight: 500;
      font-size: 22px;
    }

    .location {
      font-size: 18px;
    }

    .website {
      & > a {
        color: blue;
        font-size: 20px;
      }
    }
  }
`;
