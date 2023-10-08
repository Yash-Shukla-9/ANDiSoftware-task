import styled from "styled-components";

const HeaderBtn = ({ name }) => {
  return <Button>{name}</Button>;
};

export default HeaderBtn;

const Button = styled.button`
  background-color: #1e2022;
  color: white;
  padding: 8px 16px;
  border: 0.5px solid #1e2022;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;
