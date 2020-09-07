import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.a`
  position: relative;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  margin: 0px 12px;
  text-decoration: none;
  font-size: 30px;
  border-radius: 50%;
  color: #e2e2e2;
  box-shadow: inset -1px -1px 2px rgba(0, 0, 0, 0.2), 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border-radius: 50%;
    border: 2px solid rgba(0, 0, 0, 0.1);
    background-color: ${(props) => props.bgColor};
  }
  &:hover {
    color: #999;
    transform: translateY(-20px);
    box-shadow: inset -1px -1px 2px rgba(0, 0, 0, 0.2), 2px 24px 10px rgba(0, 0, 0, 0.1);
  }
`;
const Icon = styled.i`
  color: #ffffff;
  position: relative;
  z-index: 1;
`;

const ButtonIconFA = ({ link, icon, bgColor }) => {
  return (
    <Button href={link} bgColor={bgColor}>
      <Icon className={`fab ${icon}`} />
    </Button>
  );
};

ButtonIconFA.defaultProps = {
  link: '/#',
  bgColor: '#ffffff',
};

ButtonIconFA.propTypes = {
  link: PropTypes.string,
  icon: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
};

export default ButtonIconFA;
