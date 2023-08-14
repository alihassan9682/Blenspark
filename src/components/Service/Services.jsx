import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import Game from "/home/dev/Documents/React/Blenspark/src/assets/pngs/Game.jpeg";
import Archetecture from "/home/dev/Documents/React/Blenspark/src/assets/pngs/Archetecture.png";
import Strive from "/home/dev/Documents/React/Blenspark/src/assets/pngs/product_strive.jpeg";
import Furniture from "/home/dev/Documents/React/Blenspark/src/assets/pngs/furniture.jpeg";
import Character from "/home/dev/Documents/React/Blenspark/src/assets/pngs/Character.png";
import Interior from "/home/dev/Documents/React/Blenspark/src/assets/pngs/Interior.jpeg";
import Medical from "/home/dev/Documents/React/Blenspark/src/assets/pngs/Medical.jpeg";
import Explainer from "/home/dev/Documents/React/Blenspark/src/assets/pngs/Explainer.jpeg";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <p className="text-5xl font-bold">
          Our <span className="green">3D Services</span>
        </p>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            img={Strive}
            title={"Product Designing and Animations"}
            disc={`Transform your products into stunning 3D visualizations, 
            capturing every detail and angle.Elevate your brand with immersive experiences.`}
            navigation={""}
            tags={[
              "ProductVisualization",
              "3DAnimation",
              "ProductShowcase",
              "VirtualPrototyping",
            ]}
          />
        </Slide>
        <Slide direction="up">
          <Card
            img={Furniture}
            title={"Furniture Modeling and Showcasing"}
            disc={`Experience the future of furniture with our mesmerizing 3D design, modeling, and animation. Immerse yourself in functional artistry.`}
            navigation={""}
            tags={[
              "FurnitureDesign",
              "InteriorInspiration",
              "3DFurniture",
              "VirtualFurniture",
            ]}
          />
        </Slide>
        <Slide direction="right">
          <Card
            img={Character}
            title={"Character Designs Animations"}
            disc={`Unleash imagination through captivating character design and animation. Watch characters come alive in thrilling narratives`}
            navigation={""}
            tags={[
              "CharacterDesign",
              "AnimationArtistry",
              "CharacterAnimation",
              "ImaginaryWorlds",
            ]}
          />
        </Slide>
        <Slide direction="left">
          <Card
            img={Interior}
            title={"Interior Designs and Showcasing"}
            disc={`Elevate interiors with our exquisite 3D design, transforming spaces into captivating visual stories. Step into innovation`}
            navigation={""}
            tags={[
              "InteriorDesign",
              "3DInteriors",
              "VirtualSpaces",
              "InteriorInspiration",
            ]}
          />
        </Slide>
        <Slide direction="left">
          <Card
            img={Explainer}
            title={"Explainer Videos"}
            disc={`Unlock the power of clarity through dynamic explainer videos. Simplify the complex and engage your audience seamlessly`}
            navigation={""}
            tags={[
              "ExplainerVideos",
              "VisualCommunication",
              "StorytellingMagic",
              "EngageAndEducate",
            ]}
          />
        </Slide>
        <Slide direction="down">
          <Card
            img={Medical}
            title={"Medical Animations"}
            disc={`Journey inside the human body through mesmerizing medical animations. Visualize the unseen for education and innovation`}
            navigation={""}
            tags={[
              "HealthcareVisualization",
              "AnatomyExploration",
              "InnovateMedicine",
            ]}
          />
        </Slide>
        <Slide direction="right">
          <Card
            img={Archetecture}
            title={"Archetectural Designs"}
            disc={`Transform blueprints into breathtaking reality with our 3D architectural designs. Redefine spaces and envision the extraordinary`}
            navigation={""}
            tags={[
              "DesignIngenuity",
              "SpaceTransformation",
              "BuildingDreams",
              "3DArchitecture",
            ]}
          />
        </Slide>
        <Slide direction="down">
          <Card
            img={Game}
            title={"Game Ready Assets"}
            disc={`Level up your gaming world with meticulously crafted, game-ready assets from characters to assets to 3d realistic environments`}
            navigation={""}
            tags={[
              "GameReadyAssets",
              "DigitalAdventures",
              "ImmersiveGaming",
              "GamingVisuals",
            ]}
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
