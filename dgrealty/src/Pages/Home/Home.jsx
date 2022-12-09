import React from "react";
import { Container } from "./styled-components";
import SimpleImageSlider from "react-simple-image-slider";
import house1 from "./images/house1.jpg";
import house2 from "./images/house2.jpg";
import house3 from "./images/house3.jpg";

const images = [house1, house2, house3];

function Home() {
  return (
    <Container>
      <SimpleImageSlider
        width={"100%"}
        height={700}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </Container>
  );
}

export default Home;
