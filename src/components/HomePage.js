import React from 'react';
import styled from 'styled-components';

const bg = require('../static/images/inter.jpg');
const scroll = require('../static/images/scroll.svg');

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
	background-image: url(${bg});
	opacity: 0.6;
	background-repeat: no-repeat;
	height: calc(100vh - 130px);
	width: 100%;
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
			<ContentContainer>d</ContentContainer>
			<BlackButton>
				<span>Scroll Down</span>
				<ScrollImg src={scroll} alt="scroll" />
			</BlackButton>
		</Container>
	);
};
export default HomePage;
