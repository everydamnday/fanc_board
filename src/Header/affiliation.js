import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cardbox from "../Content/affiliation/cardbox";
import Carousel from "../Content/affiliation/carouselbox";

// App > ContentBlock > AffiliationBlock

const AffiliationBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

const Affiliation = () => {
  return (
    <AffiliationBlock>
      <Carousel />
      <Cardbox />
      <Cardbox />
      <Cardbox />
    </AffiliationBlock>
  );
};

export default Affiliation;
{
  /* */
}
