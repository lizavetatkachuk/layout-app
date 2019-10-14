import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  height: 80px;
  background-color: black;
  text-transform: uppercase;
`;

const Logo = styled.div`
  color: #e3b873;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
`;

const Link = styled.a`
  color: #ffffff;
  &:active {
    color: #e3b873;
  }
`;

const Phone = styled.div`
  color: #e3b873;
  text-decoration: underline;
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

const BrightButton = styled(BaseButton)`
  background-color: #e3b873;
`;

const Header = () => {
  return (
    <Container>
      <Logo>"Repair Design Project"</Logo>
      <LinkContainer>
        <Link className="nav-link" activeClassName="nav-link--active">
          home
        </Link>
        <Link className="nav-link" activeClassName="nav-link--active">
          projects
        </Link>
        <Link className="nav-link" activeClassName="nav-link--active">
          measurement
        </Link>
        <Link className="nav-link" activeClassName="nav-link--active">
          team
        </Link>
        <Link className="nav-link" activeClassName="nav-link--active">
          reviews
        </Link>
        <Link className="nav-link" activeClassName="nav-link--active">
          contacts
        </Link>
      </LinkContainer>
      <Phone>+37529898859034</Phone>
      <BrightButton>request a call</BrightButton>
    </Container>
  );
};
export default Header;
