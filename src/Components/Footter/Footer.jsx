import styled from "styled-components";
import GoogleMap from "../Map/GoogleMap";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaFlickr,
  FaReddit,
} from "react-icons/fa";
import { TiSocialTumbler } from "react-icons/ti";
import { BsPinterest } from "react-icons/bs";
import { Link } from "react-router-dom";
import CopyRight from "../CopyRight/CopyRight";

const Footer = () => {
  const mapURL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d869.0738733458433!2d76.96670282916575!3d29.39091066737639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dda4c8dc14293%3A0x2c28e6b0480fc6a1!2sRailway%20Rd%2C%20Panipat%2C%20Haryana%20132103!5e0!3m2!1sen!2sin!4v1591763711687!5m2!1sen!2sini";

  return (
    <FooterContainer>
      <ContactForm>
        <h2>Contact Us</h2>

        <div className="grey">
          For any kind of query, contact us with the <br /> details below.
        </div>

        <ContactInfo>
          <div className="contact-row">
            <span>Phone:</span>
            <PhoneNumber>
              +91-7015574125, +91-8810385787, +91-7206533219 , +91-9817622697
            </PhoneNumber>
          </div>
          <div className="contact-row">
            <span>Email:</span>
            <EmailLink href="mailto:info@example.com">
              andisoftwaresolutions@gmail.com
            </EmailLink>
          </div>
          <div className="contact-row">
            <span>Address:</span>
            <Address>
              <br />
              ANDi Software Solutions <br />
              Panipat & Noida
            </Address>
          </div>
        </ContactInfo>
        <FollowUsSection>
          <h2>Follow Us</h2>
          <SocialIcons>
            <Link to="https://www.facebook.com/people/Andi-Software-Solutions/100065172963303/">
              <FaFacebookF className="social-icon" />
            </Link>

            <Link to="https://www.instagram.com/andisoftwaresolutions5/?hl=en">
              <FaInstagram className="social-icon" />
            </Link>

            <Link to=" https://www.linkedin.com/company/andisoftwaresolutions/about/">
              <FaLinkedinIn className="social-icon" />
            </Link>
            <Link to="https://www.youtube.com/channel/UC0mfGwSDteVVWqmggE3MtYQ">
              <FaYoutube className="social-icon" />
            </Link>

            <Link to="https://in.pinterest.com/andisoftwaresolutions/">
              <BsPinterest className="social-icon" />
            </Link>

            <Link to="https://www.reddit.com/user/ANDIsoftsol/">
              <FaReddit className="social-icon" />
            </Link>
            <Link to="https://www.tumblr.com/explore/today">
              <TiSocialTumbler className="social-icon" />
            </Link>

            <Link to="https://www.flickr.com/people/andi_software_solutions/">
              <FaFlickr className="social-icon" />
            </Link>
          </SocialIcons>
        </FollowUsSection>
      </ContactForm>
      <MapContainer>
        <GoogleMap mapUrl={mapURL} />
      </MapContainer>

      <CopyRight />
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;

  flex-wrap: wrap;
  gap: 80px;
  padding: 10px;
  background-color: #222831;
  color: white;

  .grey {
    font-size: 16px;
    color: grey;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    gap: 40px;
  }
`;

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .contact-row {
    display: flex;
    align-items: center;

    span {
      font-weight: bold;
      margin-right: 10px;
    }
  }
`;

const PhoneNumber = styled.div`
  font-size: 16px;
`;

const EmailLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-size: 16px;
`;

const Address = styled.div`
  font-size: 16px;
  white-space: pre-line;
`;

const FollowUsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;

  .social-icon {
    font-size: 24px;
    color: #41ea35;
    cursor: pointer;

    &:hover {
      color: #0056b3;
    }
  }
`;

const MapContainer = styled.div`
  text-align: center;
  padding: 10px;

  h2 {
    font-size: 24px;
  }
`;
