import { Carousel as CarouselApi } from "react-responsive-carousel";

function Carousel({ children }) {
  return (
    <CarouselApi
      axis="horizontal"
      infiniteLoop={true}
      autoPlay={true}
      transitionTime={750}
      showStatus={false}
      showArrows={false}
      showThumbs={false}
    >
      {children}
    </CarouselApi>
  );
}

export default Carousel;
