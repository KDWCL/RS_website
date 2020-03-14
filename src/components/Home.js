import React, { Component } from "react";
import HomeImg from "../hoc/public/images/Home/home_image.jpg";
import TitleImg from "../hoc/public/images/Home/title.png";
import SubTitleImg from "../hoc/public/images/Home/subtitle.png";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  /* padding-top: 80px; */
  background-image: url(${HomeImg});
  background-size: cover;
`;

const Overlay = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.3);
  flex-direction: column;
`;

const Title = styled.img`
  margin-bottom: 25px;
`;

const SubTitle = styled.img`
  width: 1000px;
  height: 150px;
`;
export default class Home extends Component {
  render() {
    return (
      <Container>
        <Overlay>
          <Title src={TitleImg}></Title>
          <SubTitle src={SubTitleImg}></SubTitle>
        </Overlay>
      </Container>
    );
  }
}
