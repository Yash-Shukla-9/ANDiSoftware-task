import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react"; // Import useState
import { CiMenuFries } from "react-icons/ci";

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

  <CiMenuFries />;
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <SectionNav>
      <MobileMenuIcon onClick={toggleMobileMenu}></MobileMenuIcon>
      <ul className={`sec-ul ${isMobileMenuOpen ? "open" : ""}`}>
        {SecnavData.map((item, index) => (
          <li key={index}>
            <NavLinkk to={item.to} activeClassName="active" exact>
              {item.label}
            </NavLinkk>
          </li>
        ))}
      </ul>
    </SectionNav>
  );
};

export default Section1;

const SectionNav = styled.div`
  .sec-ul {
    display: flex;
    justify-content: center;
    margin: 50px 0px 20px 0px;
    padding: 20px;
    border-radius: 6px;
    gap: 50px;
    width: 100%;
    background-color: #f2f8fe;
    transition: max-height 0.5s ease; /* Add transition for smooth animation */
    overflow: hidden; /* Hide overflow content */

    &.open {
      max-height: 500px; /* Adjust the maximum height as needed */
    }

    & > li {
      font-size: 22px;
      list-style: none;

      & > a {
        text-decoration: none;
      }
    }

    .active {
      color: red;
    }
  }
`;

const NavLinkk = styled(NavLink)`
  text-decoration: none;
  color: #1e2022;
  font-weight: bold;
`;

const MobileMenuIcon = styled.div`
  display: none; /* Hide the icon by default */

  @media (max-width: 768px) {
    display: block; /* Show the icon on mobile devices */
    cursor: pointer;
    font-size: 24px;
    margin-right: 10px;
  }
`;
