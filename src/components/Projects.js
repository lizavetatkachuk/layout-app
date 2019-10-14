import React from "react";
import styled from "styled-components";

const left = require("../static/images/left.svg");
const right = require("../static/images/right.svg");
const photo = require("../static/images/inter.jpg");

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: black;
`;

const Tabs = styled.div`
  position: absolute;
  left: 46%;
  top: 108%;
  margin-left: 0px;
  display: flex;
  justify-content: space-between;
`;

const Tab = styled.div`
  margin: 0 70px 0 0;
  font-family: Yeseva One;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: #e3b873;
`;

const PhotoContainer = styled.div`
  position: absolute;
  left: 46%;
  top: 122%;
  display: flex;
`;

const Photo = styled.img`
  height: 468px;
  width: 680px;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 130px;
  margin-left: 102px;
`;

const TitleContainer = styled.div`
  display: flex;
  font-family: Yeseva One;
  font-style: normal;
  font-weight: normal;
  font-size: 27px;
  line-height: 37px;
  letter-spacing: -0.07em;
  text-transform: uppercase;
  color: #e3b873;
`;

const Footer = styled.div`
  position: absolute;
  top: 188%;
  width: 100%;
  margin-left: 0px;
  display: flex;
  flex-direction: column;
`;
const FooterText = styled.div`
  text-align: center;
  font-family: Yeseva One;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
`;

const TitleText = styled.div`
  width: 60%;
  text-align: left;
`;

const Line = styled.div`
  height: 2px;
  background-color: #e3b873;
`;

const LineContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  padding-bottom: 18px;
  width: 30%;
  height: 100%;
`;

const Description = styled.div`
  margin-top: 40px;
  width: 430px;
  text-align: left;
  font-family: FuturaBookC;
  font-size: 18px;
  line-height: 29px;
  color: #ffffff;
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 30px 0;
`;

const Item = styled.div`
  text-align: left;
  width: 50%;
`;

const Name = styled.span`
  font-family: Yeseva One;
  font-size: 18px;
  line-height: 25px;
  text-transform: uppercase;
  color: #e3b873;
`;

const Text = styled.div`
  font-family: FuturaBookC;
  font-size: 15px;
  line-height: 20px;
  color: #ffffff;
`;

const SwithContainer = styled.div`
  display: flex;
  margin-top: 70px;
`;

const Arrow = styled.img`
  width: 41px;
`;
const CirclesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 15px;
`;

const Circle = styled.div`
  background-color: #ffffff;
  height: 8px;
  width: 8px;
  margin: 0 10px;
  border-radius: 50%;
`;

const Projects = () => {
  return (
    <Container>
      <Tabs>
        <Tab>rostov-on-don admiral</Tab>
        <Tab>sochi thieves</Tab>
        <Tab>rostov-on-don-patriotic</Tab>
      </Tabs>
      <PhotoContainer>
        <Photo src={photo} alt="photo" />
      </PhotoContainer>
      <ProjectContainer>
        <TitleContainer>
          <TitleText>completed projects</TitleText>
          <LineContainer>
            <Line />
          </LineContainer>
        </TitleContainer>
        <Description>
          Only a small part of the work performed by our company is presented on
          our site. For 14 years on in the consultation market we have made
          happy more than 1000 families
        </Description>
        <DetailsContainer>
          {" "}
          <Item>
            <Name>city</Name>
            <Text>rostov-on-don</Text>
          </Item>
          <Item>
            <Name>apartment area</Name>
            <Text>81m2</Text>
          </Item>
        </DetailsContainer>

        <DetailsContainer>
          {" "}
          <Item>
            <Name>repair time</Name>
            <Text>3.5month</Text>
          </Item>
          <Item>
            <Name>repair cost</Name>
            <Text>Upon request</Text>
          </Item>
        </DetailsContainer>
        <SwithContainer>
          <Arrow src={left} alt="previous" />
          <CirclesContainer>
            <Circle />
            <Circle />
            <Circle />
          </CirclesContainer>
          <Arrow src={right} alt="next" />
        </SwithContainer>
      </ProjectContainer>
      <Footer>
        <FooterText>online control</FooterText>
      </Footer>
    </Container>
  );
};

export default Projects;
