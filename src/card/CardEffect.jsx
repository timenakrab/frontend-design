import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const Card = styled.div`
  font-family: 'kanit', sans-serif;
  position: relative;
  width: 300px;
  height: 400px;
  background-color: #0c002b;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  opacity: 0.5;
  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    bottom: 2px;
    width: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    pointer-events: none;
  }
  &:hover {
    opacity: 1;
  }
`;
const Content = styled.div`
  padding: 30px;
  text-align: center;
`;
const No = styled.h2`
  position: absolute;
  right: 30px;
  font-size: 4em;
  font-weight: 800;
  color: #1779ff;
  z-index: 1;
  opacity: 0.1;
  transition: 0.5s;
  ${Card}:hover & {
    opacity: 1;
    transform: translateY(-70px);
  }
`;
const Title = styled.h3`
  position: relative;
  font-size: 1.5em;
  color: #ffffff;
  z-index: 2;
  opacity: 0.5;
  letter-spacing: 1px;
  transition: 0.5s;
  ${Card}:hover & {
    opacity: 1;
  }
`;
const Description = styled.p`
  position: relative;
  font-size: 1em;
  color: #ffffff;
  z-index: 2;
  opacity: 0.5;
  font-weight: 300;
  letter-spacing: 1px;
  transition: 0.5s;
  ${Card}:hover & {
    opacity: 1;
  }
`;
const Linking = styled.a`
  display: inline-block;
  margin-top: 16px;
  padding: 8px 16px;
  background-color: #ffffff;
  color: #0c002b;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
`;

const Animate1 = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;
const EffectOne = styled.span`
  transition: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(to right, transparent, #1779ff);
  opacity: 0;
  animation: ${Animate1} 2s linear infinite;
  ${Card}:hover & {
    opacity: 1;
  }
`;

const Animate2 = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;
const EffectTwo = styled.span`
  transition: 0.5;
  position: absolute;
  top: 0;
  right: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(to bottom, transparent, #1779ff);
  opacity: 0;
  animation: ${Animate2} 2s linear infinite;
  animation-delay: 1s;
  ${Card}:hover & {
    opacity: 1;
  }
`;

const Animate3 = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;
const EffectThree = styled.span`
  transition: 0.5;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(to left, transparent, #1779ff);
  opacity: 0;
  animation: ${Animate3} 2s linear infinite;
  ${Card}:hover & {
    opacity: 1;
  }
`;

const Animate4 = keyframes`
  0% { transform: translateY(100%); }
  100% { transform: translateY(-100%); }
`;
const EffectFour = styled.span`
  transition: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(to top, transparent, #1779ff);
  opacity: 0;
  animation: ${Animate4} 2s linear infinite;
  animation-delay: 1s;
  ${Card}:hover & {
    opacity: 1;
  }
`;

const CardEffect = ({ no, title, desc, link }) => {
  return (
    <Card>
      <EffectOne />
      <EffectTwo />
      <EffectThree />
      <EffectFour />
      <Content>
        <No>{no}</No>
        <Title>{title}</Title>
        <Description>{desc}</Description>
        <Linking href={link}>Read More</Linking>
      </Content>
    </Card>
  );
};

CardEffect.defaultProps = {
  link: '/#',
};

CardEffect.propTypes = {
  no: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default CardEffect;
