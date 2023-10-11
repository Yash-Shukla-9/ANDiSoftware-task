import styled from "styled-components";
import HeaderBtn from "./Header-Button/HeaderBtn";
import { RiWhatsappFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";

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
      <Logo
        src="https://andisoftwaresolutions.com/1_files/logo.jpg"
        alt="Andi-software-logo"
      />
      <ButtonContainer>
        {ListBtnData.map((item, index) => (
          <HeaderBtn key={index} name={item} />
        ))}
      </ButtonContainer>
      <ContactInfo>
        <IconWrapper>
          <BsFillTelephoneFill className="icon" />
        </IconWrapper>
        <IconWrapper>
          <RiWhatsappFill className="icon" />
        </IconWrapper>
        <PhoneNumber>
          <div>+91-7015574125</div>
          <div>+91-8810385787</div>
        </PhoneNumber>
      </ContactInfo>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background-color: #fff;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
  }
`;

const Logo = styled.img`
  width: 70px;
  height: auto;
  mix-blend-mode: darken;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-end;
    gap: 20px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const PhoneNumber = styled.span`
  color: #2a55e5;
  font-size: 20px;
`;

const IconWrapper = styled.div`
  background-color: #f0f0f0;
  border-radius: 50%;
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;

  .icon {
    font-size: 20px;
    color: green;
  }

  @media (min-width: 768px) {
    margin-right: 10px;
    margin-bottom: 0;
  }
`;
