import styled from "styled-components";
import CloudData from "./Data/Cloud";
import CloudSoftwareCard from "../../../CardsAll/CloudSoftwareCard";

const CloudSoftware = () => {
  return (
    <Cloud>
      {CloudData.map((data) => {
        return <CloudSoftwareCard key={data.id} data={data} />;
      })}
    </Cloud>
  );
};

export default CloudSoftware;

const Cloud = styled.div``;
