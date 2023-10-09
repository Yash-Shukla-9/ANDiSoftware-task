import styled from "styled-components";
import OurService from "../Header Head Our service/OurService";
import PartnersData from "./Data/Partners";
import PartnersCards from "../../../CardsAll/PartnersCards";

const OurPartners = () => {
  return (
    <Partners>
      <OurService name="OUR PREFERRED PARTNERS" />

      <Container>
        {PartnersData.map((item) => {
          return <PartnersCards item={item} key={item.id} />;
        })}
      </Container>
    </Partners>
  );
};

export default OurPartners;

const Partners = styled.div``;

const Container = styled.div``;
