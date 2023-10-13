import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import ClientSlider from "./ClientSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Zoom } from "react-awesome-reveal";

let clients = [
  {
    name: "Ali Hassan",
    position: "Web Developer",
    img_url:
      "bg-[url(/home/dev/Documents/React/Blenspark/src/assets/pngs/Ali.png)]",
    stars: 3,
    disc: `I sculpt the digital universe, creating online wonders that captivate and inspire.`,
  },
  {
    name: "Farrukh Arshad",
    position: "Senior 3D Artist",
    img_url:
      "bg-[url(/home/dev/Documents/React/Blenspark/src/assets/pngs/farrukh.jpeg)]",
    stars: 4,
    disc: `I mold virtual realms, bringing imagination to life in the third dimension.`,
  },
  {
    name: "Ali Zaman",
    position: "Animation Specialist",
    img_url:
      "bg-[url(/home/dev/Documents/React/Blenspark/src/assets/pngs/zaman.jpeg)]",
    stars: 5,
    disc: `I infuse motion into dreams, bringing characters and stories to life with every frame.`,
  },
  {
    name: "Ahmad Nasir",
    position: "Senior Texturing Artist",
    img_url:
      "bg-[url(/home/dev/Documents/React/Blenspark/src/assets/pngs/Ahmed.jpeg)]",
    stars: 5,
    disc: `I breathe life into the canvas of 3D worlds, adding depth and beauty with every stroke.`,
  },
  {
    name: "Bilal Nasir",
    position: "Graphics Specialist",
    img_url:
      "bg-[url(/home/dev/Documents/React/Blenspark/src/assets/pngs/bilal.jpeg)]",
    stars: 5,
    disc: `I sculpt immersive digital worlds, where creativity knows no boundaries`,
  },
  {
    name: "Muhammad Akram",
    position: "3D Developer",
    img_url:
      "bg-[url(/home/dev/Documents/React/Blenspark/src/assets/pngs/ikram.png)]",
    stars: 5,
    disc: `As a 3D developer, I shape limitless virtual worlds.`,
  },
];

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: true,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Clients = () => {
  const arrowRef = useRef(null);
  let clientDisc = "";
  clientDisc = clients.map((item, i) => <ClientSlider item={item} key={i} />);
  return (
    <Container id="client">
      <Zoom>
        <div className="flex flex-col items-center">
          <span className="green text-5xl">Sparkers</span>
          <p className="text-center">
            Let's meet our highly skilled Artists and learn more about their <br/> expertise and experiences in various fields.
          </p>
        </div>
      </Zoom>
      <Testimonials>
        <Slider ref={arrowRef} {...settings}>
          {clientDisc}
        </Slider>
        {/* <Buttons>
          <button onClick={() => arrowRef.current.slickPrev()}>
            <IoIosArrowBack />
          </button>
          <button onClick={() => arrowRef.current.slickNext()}>
            <IoIosArrowForward />
          </button>
        </Buttons> */}
      </Testimonials>
    </Container>
  );
};

export default Clients;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0;

  @media (max-width: 840px) {
    width: 90%;
  }

  span {
    font-weight: 700;
    text-transform: uppercase;
  }

  h1 {
    padding-top: 1rem;
    text-transform: capitalize;
  }

  /* Responsive styling for smaller screens */
  @media (max-width: 600px) {
    padding: 2rem 0;
  }
`;

const Testimonials = styled.div`
  margin-top: 2rem;
  position: relative;

  /* Responsive styling for smaller screens */
  @media (max-width: 600px) {
    margin-top: 1rem;
  }
`;

const Buttons = styled.div`
  position: absolute;
  right: 0.7rem;
  bottom: -2rem;

  button {
    background-color: transparent;
    margin-left: 0.5rem;
    border: none;
    color: #01be96;
    cursor: pointer;
    font-size: 1.1rem;
  }

  @media (max-width: 530px) {
    display: none;
  }

  /* Responsive styling for smaller screens */
  @media (max-width: 600px) {
    right: 0.3rem;
    bottom: -1rem;
    button {
      font-size: 1rem;
    }
 }
}`;
