import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { seoDesc, seoKeywords, seoPage, seoTitle } from './constant/configWebsite';
import HeaderPage from './HeaderPage';
import { ChildrenProps } from './type/custom';

const Main = styled.main`
  margin-left: 5rem;
  min-height: 100vh;
  @media (max-width: 600px) {
    margin: 0px;
    margin-bottom: 5rem;
  }
`;
const Navbar = styled.nav`
  position: fixed;
  z-index: 10000;
  background-color: #2a3950;
  transition: width 200ms ease;
  @media (max-width: 600px) {
    bottom: 0px;
    width: 100vw;
    height: 5rem;
  }
  @media (min-width: 601px) {
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
    overflow-x: scroll;
    overflow-y: hidden;
  }
`;
const NavbarItem = styled.li`
  width: 100%;
  @media (max-width: 600px) {
    &:nth-child(2) {
      display: none;
    }
    &:last-child {
      margin-top: 0px;
    }
  }
  @media (min-width: 601px) {
    &:nth-child(2) {
      display: none;
    }
    &:last-child {
      margin-top: auto;
    }
  }
`;
const NavberLink = styled.a<{ active?: boolean }>`
  display: flex;
  align-items: center;
  height: 5rem;
  text-decoration: none;
  filter: ${(props) =>
    props.active ? 'grayscale(0%) opacity(1)' : 'grayscale(100%) opacity(0.7)'};
  background-color: ${(props) => (props.active ? '#41436a' : 'transparent')};
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
  @media (min-width: 601px) {
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
  @media (max-width: 600px) {
    min-width: 1rem;
    margin: 0;
  }
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
  pathname?: string;
  children: ChildrenProps;
  customStyle?: React.CSSProperties;
  seoData?: {
    title: string;
    desc: string;
    url: string;
    keywords: string;
  };
};

const MainLayout = ({ pathname, children, customStyle, seoData }: MainLayoutProps) => {
  const { title, desc, url, keywords } = seoData;
  return (
    <>
      <Navbar>
        <NavbarNav>
          <Logo>
            <Link href="/">
              <NavberLink href="/">
                <LinkText>Time Pai Ruey</LinkText>
                <IconLogo className="fas fa-angle-double-right" />
              </NavberLink>
            </Link>
          </Logo>
          <NavbarItem>
            <Link href="/">
              <NavberLink href="/" active={pathname === '/'}>
                <Icon className="fas fa-home" />
                <LinkText>home</LinkText>
              </NavberLink>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/card">
              <NavberLink href="/card" active={pathname === '/card'}>
                <Icon className="far fa-id-card" />
                <LinkText>card</LinkText>
              </NavberLink>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/button">
              <NavberLink href="/button" active={pathname === '/button'}>
                <Icon className="far fa-hand-point-up" />
                <LinkText>button</LinkText>
              </NavberLink>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/toggle">
              <NavberLink href="/toggle" active={pathname === '/toggle'}>
                <Icon className="fas fa-toggle-on" />
                <LinkText>toggle</LinkText>
              </NavberLink>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/ui-kit">
              <NavberLink href="/ui-kit" active={pathname === '/ui-kit'}>
                <Icon className="fab fa-uikit" />
                <LinkText>ui kit</LinkText>
              </NavberLink>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <NavberLink href="https://www.facebook.com/TimePaiRuey" target="_blank">
              <Icon className="fab fa-facebook" />
              <LinkText>FB PAGE</LinkText>
            </NavberLink>
          </NavbarItem>
        </NavbarNav>
      </Navbar>
      <HeaderPage title={title} desc={desc} url={url} keywords={keywords} />
      <Main style={{ ...customStyle }}>{children}</Main>
    </>
  );
};

MainLayout.defaultProps = {
  pathname: '',
  customStyle: {},
  seoData: {
    title: seoTitle,
    desc: seoDesc,
    url: seoPage,
    keywords: seoKeywords,
  },
};

export default MainLayout;
