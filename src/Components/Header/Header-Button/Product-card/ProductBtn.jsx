import styled from "styled-components";

const ProductBtn = () => {
  return <Button>Request Demo / Get Quote</Button>;
};

export default ProductBtn;
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  margin-top: 10px;
  border-radius: 4px;
  background-color: #276cf2; /* Change to your desired background color */
  color: #fff; /* Change to your desired text color */
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #2980b9; /* Change to a slightly different shade for hover effect */
    transform: scale(1.05); /* Add a slight scaling effect on hover */
  }
`;

// Usage: <Button>Click Me</Button>
