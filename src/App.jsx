import { Outlet } from "react-router-dom";

import Footer from "./Components/Footter/Footer";
import Header from "./Components/Header/Header";
import Section1 from "./Components/Section1/Section1";
import styled from "styled-components";
import Typewriter from "./Components/TypeWritting/AutoTyping";

const App = () => {
  return (
    <div>
      <Header />

      <SectionFlex>
        <Section1 />
      </SectionFlex>
      <Typewriter />
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
`;
