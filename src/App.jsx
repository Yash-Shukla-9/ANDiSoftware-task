import { Outlet } from "react-router-dom";

import Footer from "./Components/Footter/Footer";
import Header from "./Components/Header/Header";
import Section1 from "./Components/Section1/Section1";
import styled from "styled-components";
import Typewriter from "./Components/TypeWritting/AutoTyping";
import ICarousel from "./Components/Carsoul/Carsoul";

const App = () => {
  return (
    <div>
      <Header />

      <SectionFlex>
        <Section1 />
      </SectionFlex>
      <Typewriter />
      <ICarousel />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;

const SectionFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    align-items: start;
    justify-content: start;
    margin: 50px 20px;
  }
`;
