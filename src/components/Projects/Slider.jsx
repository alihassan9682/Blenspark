import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import Controller from "/home/dev/Documents/React/Blenspark/src/assets/pngs/controller.png";
import Towel from "/home/dev/Documents/React/Blenspark/src/assets/pngs/towel.png";
import Umbrella from "/home/dev/Documents/React/Blenspark/src/assets/pngs/umbrella.png";
import Racket from "/home/dev/Documents/React/Blenspark/src/assets/pngs/racket.png";
import Photobooth from "/home/dev/Documents/React/Blenspark/src/assets/pngs/photobooth.jpeg";
import Chair from "/home/dev/Documents/React/Blenspark/src/assets/pngs/royalchair.jpg";

let data = [
  {
    img: Towel,
    disc: "Towel Animation Showcase is a visually enchanting project that creatively animates towels, transforming them into captivating characters and scenes. Experience animation's magic in a unique and imaginative form, making it visually delightful for all.",
    link: "https://www.behance.net/gallery/173533429/Kitchen-Towel-3D-Animation-Video",
  },
  {
    img: Controller,
    disc: "Game Controller Animation Showcase creatively animates gaming controllers, transforming them into lively characters and interactive scenes. Experience gaming in a visually engaging and imaginative way.",
    link: "https://www.behance.net/gallery/177803609/NVIDIA-Game-Controller-3D-Product-Renders",
  },
  {
    img: Umbrella,
    disc: "Umbrella Animation Showcase creatively animates umbrellas, bringing them to life as vibrant characters and lively scenes. Witness the charm of everyday umbrellas in an imaginative and visually captivating form. Experience the unexpected magic of animation, making it a delightful watch for all.",
    link: "https://www.behance.net/gallery/177639139/3D-Umbrella-Rendering-DRIP-DROP",
  },
  {
    img: Racket,
    disc: "Table Tennis Racket Animation Showcase transforms ordinary table tennis rackets into dynamic, animated characters and lively game scenarios. Experience the excitement of table tennis in a visually captivating and imaginative form. Dive into the world of sports through creative animation, making it an engaging visual experience for sports enthusiasts and animation lovers alike.",
  },
  {
    img: Photobooth,
    disc: "Futuristic Environment Animation Showcase immerses viewers in visually captivating animations of advanced cities and innovative landscapes. Experience the future through stunning visuals, blending creativity and technology seamlessly.",
  },
  {
    img: Chair,
    disc: "Royal Chair Animation Showcase animates regal chairs into majestic characters and opulent scenes, embodying elegance and sophistication. Experience the grandeur of royalty in visually captivating animations.",
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack className="fill-white ml-2" />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward className="fill-white ml-2" />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: #016e6a;
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;
