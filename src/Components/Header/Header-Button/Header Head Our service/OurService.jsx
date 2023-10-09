import styled from "styled-components";

const OurService = ({ name }) => {
  return (
    <ServiceHead>
      <h2 className="heading">
        <div className="redline"></div>
        {name}
        <div className="redline"></div>
      </h2>
    </ServiceHead>
  );
};

export default OurService;

const ServiceHead = styled.div`
  .line {
    background-color: aliceblue;
    width: 600px;
    height: 20px;
    margin: 20px 0;
  }

  .heading {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 35px;
    color: #333;
  }

  .redline {
    height: 2px;
    width: 100px;
    background-color: red;
  }

  .left-redline,
  .right-redline {
    height: 5px;
    width: 100px;
    background-color: red;
    margin-top: 20px; /* Add space above and below the lines */
  }

  .left-redline {
    margin-right: 20px;
  }

  .right-redline {
    margin-left: 20px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  text-align: center;

  @media (max-width: 768px) {
    .heading {
      flex-direction: column; /* Stack the red lines and name vertically */
      align-items: center;
      text-align: center;
    }

    .left-redline,
    .right-redline {
      margin: 10px 0; /* Reduce the margin for smaller screens */
    }
  }
`;
