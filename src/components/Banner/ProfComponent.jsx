import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiUpwork, SiWhatsapp, SiBehance } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import { Slide } from "react-awesome-reveal";
import BlenSpark from "/home/dev/Documents/React/Blenspark/src/assets/pngs/BlenSpark.png";

const ProfComponent = () => {
  return (
    <Container id="home" className="h-fit">
      <Slide direction="left" className="w-[90%]">
        <Texts>
          <div className="text-4xl mt-8">
            Hello <span className="green">We are</span>
          </div>
          <div className="text-8xl font-bold mt-2 mb-2 md:text-6xl xs:text-6xl">
            BlenSpark
          </div>
          <h3>3D Visualization Services Providers</h3>
          <div className="font-sans text-2xl mt-4 sm:hidden lg:contents xs:hidden md:hidden">
            <p>
              Blenspark is a leading provider of cutting-edge 3D visualization
              services. Our company specializes in transforming ideas and
              concepts into stunning, realistic visual representations. With a
              team of skilled designers and state-of-the-art technology, we
              bring designs to life, allowing clients to visualize their
              projects in a captivating and immersive manner.
            </p>
          </div>
          <Social>
            <div className="">
              <div className="text-5xl mt-8 font-bold">
                <span className="green">Contact </span>Us
              </div>
              <div className="flex flex-wrap gap-3 items-center social-icons transform scale-[150%] ml-16 mt-8">
                <span>
                  <a
                    href="https://www.upwork.com/freelancers/~01be627ef25194e660"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-[#01be96]">
                      <SiUpwork
                        style={{
                          width: "90px",
                          height: "50px",
                          padding: "14px",
                        }}
                      />
                    </div>
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.upwork.com/freelancers/~01be627ef25194e660"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-[#01be96] -mt-1">
                      <TbBrandFiverr
                        style={{
                          width: "90px",
                          height: "40px",
                          padding: "10px",
                        }}
                      />
                    </div>
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.upwork.com/freelancers/~01be627ef25194e660"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-[#01be96] -mt-1">
                      <SiWhatsapp
                        style={{
                          width: "80px",
                          height: "38px",
                          padding: "10px",
                        }}
                      />
                    </div>
                  </a>
                </span>
                <span>
                  <a
                    href="https://instagram.com/blenspark?igshid=MzRlODBiNWFlZA=="
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-[#01be96] -mt-1">
                      <AiOutlineInstagram
                        style={{
                          width: "90px",
                          height: "40px",
                          padding: "10px",
                        }}
                      />
                    </div>
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.behance.net/_products"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <div className="bg-[#01be96] -mt-1">
                      <SiBehance
                        style={{
                          width: "90px",
                          height: "40px",
                          padding: "10px",
                        }}
                      />
                    </div>
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.linkedin.com/company/90946761/admin/feed/posts/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-[#01be96] -mt-1">
                      <FaLinkedinIn />
                    </div>
                  </a>
                </span>
              </div>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile className="bg-black h-fit md:hidden sm:hidden lg:contents xs:hidden">
          <img style={{ width: 400, height: 400 }} src={BlenSpark} alt="logo" />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }
  height: 100vh;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;

  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
