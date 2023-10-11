import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { TfiMenu } from "react-icons/tfi";

const SecnavData = [
  { label: "Home", to: "/Home" },
  { label: "Products & Services", to: "/Products&Services" },
  { label: "Digital Marketing", to: "/DigitalMarketing" },
  { label: "Cloud Software", to: "/CloudSoftware" },
  { label: "Our Clients", to: "/OurClient" },
  { label: "Our Partners", to: "/OurPartners" },
  { label: "Contact Us", to: "/Contactus" },
];

const Section1 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* <MobileMenuIcon onClick={toggleMobileMenu}>
        <CiMenuFries size={28} />
      </MobileMenuIcon> */}

      <SectionNav>
        <MobileMenuIcon onClick={toggleMobileMenu}>
          <TfiMenu className="icon" />
        </MobileMenuIcon>
        <ul className={`sec-ul ${isMobileMenuOpen ? "open" : ""}`}>
          {SecnavData.map((item, index) => (
            <li key={index}>
              <NavLink to={item.to} activeClassName="active" exact>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </SectionNav>
    </div>
  );
};

export default Section1;

const SectionNav = styled.div`
  display: flex;

  .sec-ul {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    padding: 20px;
    border-radius: 6px;
    gap: 10px;
    background-color: #f2f8fe;
    transition: max-height 0.5s ease;
    overflow: hidden;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      display: none;
    }

    &.open {
      max-height: 500px;
      flex-direction: column;
    }

    & > li {
      font-size: 24px;
      list-style: none;

      & > a {
        text-decoration: none;
        color: #1e2022;
        font-weight: bold;
      }
    }

    .active {
      color: red;
    }
  }

  .sec-ul.open {
    display: flex;
  }
`;
const MobileMenuIcon = styled.div`
  display: none;

  .icon {
    font-size: 28px;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    display: flex;
    /* align-items: center; */
    cursor: pointer;
    font-size: 24px;

    margin-right: 10px;
  }
`;
