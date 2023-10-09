import styled from "styled-components";

const CloudSoftwareCard = ({ data }) => {
  return (
    <Cloud>
      <div className="left">
        <img src={data.image} alt="" />
      </div>

      <div className="right">
        <h2 className="head">{data.heading}</h2>
        <div className="para1">
          <p className="text1">{data.text1}</p>
        </div>
        <div className="para2">
          <p className="text2">{data.text2}</p>
        </div>

        <div className="price">
          <p>{data.price}</p>
        </div>
      </div>
    </Cloud>
  );
};

export default CloudSoftwareCard;

const Cloud = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  .left {
    & > img {
      width: 250px;
    }
  }

  .right {
    width: 600px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    .head {
      text-align: center;
      font-size: 28px;
    }

    .text1 {
      font-size: 18px;
    }

    .text2 {
      font-size: 16px;
      color: grey;
    }

    .price {
      & > p {
        font-weight: 600;
        font-size: 18px;
      }
    }
  }
`;
