import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Services from "./components/Service/Services";
import header from "/home/dev/Documents/React/Blenspark/src/assets/pngs/header.jpeg";

function App() {
  return (
    <Container className="bg-zinc-800">
      <Banner
      className="h-[100%]"
        style={{
          background: `url(${header})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black bg-opacity-40 h-fit">
          <Header />
        </div>
        <div className="bg-black bg-opacity-40 h-fll">
        <ProfComponent />
        </div>
      </Banner>
      <Services />

      <Projects />

      <Clients />

      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
  background: linear-gradient(
    159deg,
    rgb(224, 224, 224) 0%,
    rgb(224, 224, 224) 100%
  );

  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
