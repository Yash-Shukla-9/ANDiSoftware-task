import styled from "styled-components";
import ProductData from "./Data/Product.data";
import ProductCard from "../Product-card/ProductCard";
import OurService from "../Header Head Our service/OurService";

const ProductService = () => {
  return (
    <div>
      <Head>
        <OurService name="OUR PRODUCTS" />
      </Head>

      <Container>
        {ProductData.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </Container>
    </div>
  );
};

export default ProductService;

const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: #52616b;
  color: white;
`;
