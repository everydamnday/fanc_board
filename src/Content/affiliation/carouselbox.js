import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// App > ContentBlock > AffiliationBlock > CarouselBlock

const CarouselBlock = styled.div`
  margin-top: 10px;
  background-color: white;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  .slider {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    font-size: 1.5rem;
    text-align: center;

    .carousel-item_img {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        height: 360px;
        vertical-align: middle;
        object-fit: scale-down;
      }
    }

    .carousel-item_title {
      color: white;
      font-size: 1.4rem;
    }
  }
`;

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slider",
  };
  return (
    <CarouselBlock>
      <Slider {...settings}>
        <div className="carousel-item">
          <div className="carousel-item_img">
            <img src="https://images.unsplash.com/photo-1615065592543-334b128affca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-item_img">
            <img src="https://images.unsplash.com/photo-1445905595283-21f8ae8a33d2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" />
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-item_img">
            <img src="https://images.unsplash.com/photo-1610327104330-afd2186bc153?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" />
          </div>
        </div>
      </Slider>
    </CarouselBlock>
  );
};

export default Carousel;
