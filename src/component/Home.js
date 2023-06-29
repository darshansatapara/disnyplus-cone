import styled from "styled-components";
import ImgSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";

const Home = (props) => {
    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends/>
        </Container>
    );


};

//style
const Container = styled.main`
  position: relative;
  min-height: calc(100vh);
  overflow-x: hidden;
  display: block;
  padding-top: 70px;
  padding: 0 calc(3.5vw +5px);

  &:after {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

export default Home;
