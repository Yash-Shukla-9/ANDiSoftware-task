import styled from "styled-components";
import HeaderBtn from "./Header-Button/HeaderBtn";
import { RiWhatsappFill } from "react-icons/ri";

const ListBtnData = [
  "Toll Free Panel",
  "Missed call Panel",
  "SMS Panel",
  "Whatsapp Panel",
  "Payment",
];

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo
          src="https://andisoftwaresolutions.com/1_files/logo.jpg"
          alt="Andi-software-logo"
        />
      </LogoContainer>
      <ContactInfo>
        <RiWhatsappFill className="icon" />
        <PhoneNumber>+91-9999999999, +91-889999999</PhoneNumber>
      </ContactInfo>
      <ButtonContainer>
        {ListBtnData.map((item, index) => (
          <HeaderBtn key={index} name={item} />
        ))}
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background-color: #f0f5f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 20px;

  .icon {
    font-size: 25px;
    color: green;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    justify-content: space-between;
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Logo = styled.img`
  /* max-width: 100%; */
  width: 70px;
  height: auto;
  mix-blend-mode: darken;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 0;
  }
`;

const PhoneNumber = styled.span`
  color: #d80032;
  margin-left: 5px;
  font-size: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

// const Button = styled.button`
//   background-color: #007bff;
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;
