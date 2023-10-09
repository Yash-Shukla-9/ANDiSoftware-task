import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderBtn = ({ name }) => {
  return (
    <LinkBt to="/">
      <Button>{name}</Button>
    </LinkBt>
  );
};

export default HeaderBtn;

const LinkBt = styled(Link)`
  text-decoration: none;
`;

const Button = styled.div`
  color: #1e2022;
  padding: 12px;
  font-weight: 800;
  font-size: 19px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    color: rgb(0, 133, 255);
  }
`;
