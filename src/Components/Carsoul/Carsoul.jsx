import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

const ICarousel = () => {
  return (
    <CarouselContainer>
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
      >
        <Slide>
          <img
            src="https://andisoftwaresolutions.com/1_files/banner1.png"
            alt="Image 1"
          />
        </Slide>
        <Slide>
          <img
            src="https://andisoftwaresolutions.com/1_files/banner2.jpg"
            alt="Image 2"
          />
        </Slide>
        {/* Add more slides as needed */}
      </Carousel>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: auto;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;

  margin-top: 50px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

export default ICarousel;
