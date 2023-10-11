import styled from "styled-components";
import { FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";

const ContactUs = () => {
  return (
    <ContactContainer>
      <h2 className="head">
        Contact <span className="Red">Details</span>
      </h2>

      <ContactInfo>
        <ContactItem>
          <Icon>
            <FaEnvelope />
          </Icon>
          <ContactDetail>
            <h3>Email</h3>
            <span>info@andisoftwaresolutions.com</span>
            <div className="grey">We reply within 24 hours</div>
          </ContactDetail>
        </ContactItem>

        <ContactItem>
          <Icon>
            <FaPhone />
          </Icon>
          <ContactDetail>
            <h3>Sales</h3>
            <span>+91-8810385787</span>
            <div className="grey"> ab@andisoftwaresolutions.com</div>
          </ContactDetail>
        </ContactItem>
        <ContactItem>
          <Icon>
            <FaPhone />
          </Icon>
          <ContactDetail>
            <h3>Support</h3>
            <span>+91-7206533219</span>
            <div className="grey"> support@andisoftwaresolutions.com</div>
          </ContactDetail>
        </ContactItem>
        <ContactItem>
          <Icon>
            <FaPhone />
          </Icon>
          <ContactDetail>
            <h3>Marketing</h3>
            <span>+91-9817622697</span>
            <div className="grey"> sales@andisoftwaresolutions.com</div>
          </ContactDetail>
        </ContactItem>
        <ContactItem>
          <Icon>
            <FaPhone />
          </Icon>
          <ContactDetail>
            <h3>Technical Support</h3>
            <span>+91-7015574125</span>
            <div className="grey"> dh@andisoftwaresolutions.com</div>
          </ContactDetail>
        </ContactItem>

        <ContactItem>
          <Icon>
            <FaGlobe />
          </Icon>
          <ContactDetail>
            <h3>Website</h3>
            <span>www.andisoftwaresolutions.com</span>
          </ContactDetail>
        </ContactItem>
      </ContactInfo>
    </ContactContainer>
  );
};

export default ContactUs;

const ContactContainer = styled.div`
  background-color: #f0f0f0;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  .head {
    font-size: 40px;
  }

  .Red {
    color: red;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const ContactInfo = styled.div`
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 0;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 18px;
  max-width: 350px;
  margin: 20px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  .grey {
    font-size: 14px;
    font-weight: 500;
    color: grey;
  }
`;

const Icon = styled.div`
  background-color: #007bff;
  color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
`;

const ContactDetail = styled.div`
  h3 {
    font-size: 20px;
    margin: 0;
  }

  span {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    ContactItem {
      max-width: 100%;
    }
  }
`;
