import styled from "styled-components";

const CopyRight = () => {
  return (
    <CopyrightContainer>
      <p>
        &copy; Copyright 2021 © ANDi Software Solutions . All Rights reserved
      </p>
    </CopyrightContainer>
  );
};

const CopyrightContainer = styled.div`
  color: #fff;
  text-align: center;
  padding: 10px 0;
  font-size: 18px;

  p {
    margin: 0;
  }
`;

export default CopyRight;
