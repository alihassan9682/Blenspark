import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import Bull from "/home/dev/Documents/React/Blenspark/src/assets/pngs/blender1.png";
import Bag from "/home/dev/Documents/React/Blenspark/src/assets/pngs/3.png";
import House from "/home/dev/Documents/React/Blenspark/src/assets/pngs/5.png";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <p className="text-6xl font-bold">
          Our <span className="green">3D Services</span>
        </p>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            img={Bag}
            title={"Product Designs"}
            disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
            navigation={
              "https://www.behance.net/gallery/171855685/EVATAC-DUFFEL-BAG-3D-ANIMATION"
            }
            tags={["3D animation", "models", "models", "storytelling"]}
          />
        </Slide>
        <Slide direction="up">
          <Card
            img={House}
            title={"Architechural Designs"}
            disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
            tags={["3D animation", "models", "models", "storytelling"]}
          />
        </Slide>
        <Slide direction="right">
          <Card
            img={Bag}
            title={"Character Designs"}
            disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
            tags={["3D animation", "models", "models", "storytelling"]}
          />
        </Slide>
        <Slide direction="left">
          <Card
            img={Bull}
            title={"Furniture Designs"}
            disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
            tags={["3D animation", "models", "models", "storytelling"]}
          />
        </Slide>
        <Slide direction="up">
          <Card
            img={Bag}
            title={"Explainer Videos"}
            disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
            tags={["3D animation", "models", "models", "storytelling"]}
          />
        </Slide>
        <Slide direction="right">
          <Card
            img={Bag}
            title={"Realistic Advertisements"}
            disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
            tags={["3D animation", "models", "storytelling"]}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }
  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
