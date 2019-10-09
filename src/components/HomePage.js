import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
`;

const SideBar = styled.div`
	display: flex;
	align-items: center;
	background-color: black;
	color: #e3b873;
	height: 100vh;
	width: 80px;
`;

const VerticalText = styled.div`
	display: flex;
	align-items: center;
	transform: rotate(90deg);
	text-transform: uppercase;
`;
const Line = styled.div`
	height: 2px;
	width: 60px;
	margin-left: 10px;
	background-color: #e3b873;
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
		</Container>
	);
};
export default HomePage;
