import React from "react";
import styled from "styled-components";

const bg = require("../static/images/inter.jpg");
const scroll = require("../static/images/scroll.svg");

const Container = styled.div`
  display: flex;
  position: relative;
  background-color: black;
`;

const SideBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: #e3b873;
  height: calc(100vh - 80px);
  width: 80px;
`;

const BaseButton = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 2px;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  padding: 13px 33px;
`;

const BlackButton = styled(BaseButton)`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 0;
  height: 100px;
  background-color: black;
`;

const OrangeButton = styled(BaseButton)`
  margin-right: 20px;
  padding: 20px 22px;
  text-align: center;
  vertical-align: middle;
  font-family: FuturaDemiC;
  font-size: 12px;
  line-height: 15px;
  background-color: #e3b873;
`;

const TransparentButton = styled(BaseButton)`
  margin-right: 12px;
  padding: 20px 25px;
  vertical-align: middle;
  font-family: FuturaDemiC;
  font-size: 12px;
  line-height: 15px;
  background-color: transparent;
  border: 1px solid white;
`;

const VerticalText = styled.div`
  display: flex;
  align-items: center;
  writing-mode: tb-rl;
  text-transform: uppercase;
`;
const Line = styled.div`
  height: 60px;
  width: 2px;
  background-color: #e3b873;
  margin-top: 5px;
`;

const ScrollImg = styled.img`
  height: 22px;
  width: 22px;
  margin-left: 10px;
`;

const ContentContainer = styled.div`
  background: linear-gradient(to right, #000000ad, #000000ad),
    url(${bg}) no-repeat;
  height: calc(100vh - 130px);
  width: 100%;
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 274px;
  left: 140px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const BigText = styled.p`
  margin-bottom: 19px;
  font-family: Yeseva One;
  text-transform: uppercase;
  text-align: left;
  font-size: 40px;
  color: #ffffff;
  line-height: 53px;
`;

const BigOrangeText = styled.span`
  color: #e3b873;
`;

const SmallText = styled.p`
  margin-top: 0px;
  line-height: 30px;
  text-align: left;
  font-family: FuturaBookC;
  font-size: 22px;
  color: #ffffff;
  width: 440px;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 440px;
`;

const HomePage = () => {
  return (
    <Container>
      <SideBar>
        <VerticalText>
          <div>Instagram </div>
          <Line />
        </VerticalText>
      </SideBar>
      <ContentContainer>
        <InfoContainer>
          <BigText>
            turnkey repair in the city of{" "}
            <BigOrangeText>rostov-on-don</BigOrangeText>
          </BigText>
          <SmallText>
            Get ready-made turnkey repairs on time with work time saving up to
            45 days and 20% from cost of materials due to the organisation of
            work
          </SmallText>
          <ButtonContainer>
            <OrangeButton>Calculate the cost</OrangeButton>
            <TransparentButton>Submit your application</TransparentButton>
          </ButtonContainer>
        </InfoContainer>
      </ContentContainer>
      <BlackButton>
        <span>Scroll Down</span>
        <ScrollImg src={scroll} alt="scroll" />
      </BlackButton>
    </Container>
  );
};
export default HomePage;
