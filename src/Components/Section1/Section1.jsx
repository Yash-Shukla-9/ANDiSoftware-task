import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
  return (
    <SectionNav>
      <ul className="sec-ul">
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
    margin: 20px;
    padding: 20px;
    border-radius: 6px;
    gap: 50px;
    width: 100%;
    background-color: #c9d6df;

    & > li {
      font-size: 22px;
      list-style: none;

      & > Navlink {
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
