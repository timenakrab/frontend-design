import React from 'react';
import styled from 'styled-components';

import { ChildrenProps } from './type/custom';

const Main = styled.main`
  margin-left: 5rem;
  padding: 1rem;
  min-height: 100vh;
  @media (max-width: 600px) {
    margin: 0px;
  }
`;
const Navbar = styled.nav`
  position: fixed;
  background-color: #2a3950;
  transition: width 200ms ease;
  @media (max-width: 600px) {
    bottom: 0px;
    width: 100vw;
    height: 5rem;
  }
  @media (min-width: 600px) {
    top: 0px;
    width: 5rem;
    height: 100vh;
    &:hover {
      width: 16rem;
    }
  }
`;
const NavbarNav = styled.ul`
  height: 100%;
  list-style: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: row;
  }
`;
const NavbarItem = styled.li`
  width: 100%;
  &:last-child {
    margin-top: auto;
  }
`;
const NavberLink = styled.a`
  display: flex;
  align-items: center;
  height: 5rem;
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  &:hover {
    filter: grayscale(0%) opacity(1);
    background-color: #41436a;
  }
  @media (max-width: 600px) {
    justify-content: center;
  }
`;
const LinkText = styled.span`
  display: none;
  margin-left: 1rem;
  color: #ff9678;
  font-family: 'Kanit';
  text-transform: uppercase;
  ${Navbar}:hover & {
    display: block;
  }
  @media (max-width: 600px) {
    ${Navbar}:hover & {
      display: none;
      transition: opacity 200ms;
    }
  }
  @media (min-width: 600px) {
    ${Navbar}:hover & {
      display: inline;
      transition: opacity 200ms;
    }
  }
`;
const Icon = styled.i`
  min-width: 2rem;
  margin: 0 1.5rem;
  font-size: 28px;
  color: #f54768;
`;
const Logo = styled.li`
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
  color: #dddddd;
  font-size: 1.25rem;
  background-color: #41436a;
  letter-spacing: 0.1ch;
  width: 100%;
  font-family: 'Kanit';
  @media (max-width: 600px) {
    display: none;
  }
`;
const IconLogo = styled.i`
  font-size: 28px;
  color: #f54768;
  transform: rotate(0deg);
  transition: transform 200ms;
  margin: 0 1.5rem;
  ${Navbar}:hover & {
    transform: rotate(-540deg);
  }
`;

type MainLayoutProps = {
  children: ChildrenProps;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar>
        <NavbarNav className="navbar-nav">
          <Logo>
            <NavberLink href="/">
              <LinkText className="link-text">Time Pai Ruey</LinkText>
              <IconLogo className="fas fa-angle-double-right" />
            </NavberLink>
          </Logo>
          <NavbarItem className="navbar-item">
            <NavberLink className="navbar-link" href="/">
              <Icon className="fas fa-home" />
              <LinkText className="link-text">home</LinkText>
            </NavberLink>
          </NavbarItem>
          <NavbarItem>
            <NavberLink href="/">
              <Icon className="far fa-id-card" />
              <LinkText>card</LinkText>
            </NavberLink>
          </NavbarItem>
          <NavbarItem>
            <NavberLink href="/">
              <Icon className="far fa-hand-point-up" />
              <LinkText>button</LinkText>
            </NavberLink>
          </NavbarItem>
          <NavbarItem>
            <NavberLink href="/">
              <Icon className="fas fa-toggle-on" />
              <LinkText>toggle</LinkText>
            </NavberLink>
          </NavbarItem>
          <NavbarItem>
            <NavberLink href="https://www.facebook.com/TimePaiRuey">
              <Icon className="fab fa-facebook" />
              <LinkText>FB PAGE</LinkText>
            </NavberLink>
          </NavbarItem>
        </NavbarNav>
      </Navbar>
      <Main>{children}</Main>
    </>
  );
};

export default MainLayout;
