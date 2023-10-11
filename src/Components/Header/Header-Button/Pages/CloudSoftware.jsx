import styled from "styled-components";
import CloudData from "./Data/Cloud";
import CloudSoftwareCard from "../../../CardsAll/CloudSoftwareCard";
import OurService from "../Header Head Our service/OurService";

const CloudSoftware = () => {
  return (
    <div>
      <OurService name="OUR CLOUD SOFTWARE" />

      <Cloud>
        {CloudData.map((data) => {
          return <CloudSoftwareCard key={data.id} data={data} />;
        })}
      </Cloud>
    </div>
  );
};

export default CloudSoftware;

const Cloud = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
