import React from 'react';
import styled from 'styled-components';

import { colors, unit } from './styleguilde';

interface IAlert {
  text: string;
  type: 'error' | 'warning' | 'success' | 'info';
}
interface IBody {
  bgColor: {
    primary: string;
    secondary: string;
  };
}

interface ICloseBtn {
  bgColor: {
    primary: string;
    secondary: string;
  };
}

const AlertBody = styled.div<IBody>`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-radius: ${unit * 2}px;
  background-color: ${(props) => props.bgColor.secondary};
  margin-bottom: ${unit}px;
  overflow: hidden;
`;
const AlertText = styled.div`
  position: relative;
  overflow: hidden;
  width: calc(100% - 40px);
  padding: 0px 16px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  min-height: calc(40px);
  max-height: calc(40px);
  height: auto;
  color: ${colors.text.white};
  font-family: 'Kanit', sans-serif;
  font-size: 18px;
  line-height: 40px;
`;
const Close = styled.button<ICloseBtn>`
  width: ${unit * 5}px;
  height: ${unit * 5}px;
  padding: 0px;
  background-color: ${(props) => props.bgColor.secondary};
  cursor: pointer;
  outline: 0px;
  box-shadow: none;
  border: 0px solid transparent;
  & > i {
    font-size: 20px;
    color: ${colors.text.white};
  }
  &:hover {
    background-color: ${(props) => props.bgColor.primary};
  }
`;

const Alert: React.FC<IAlert> = (props: IAlert) => {
  const { text, type } = props;
  return (
    <AlertBody bgColor={colors[type]}>
      <AlertText>{text}</AlertText>
      <Close type="button" bgColor={colors[type]}>
        <i className="fas fa-times" />
      </Close>
    </AlertBody>
  );
};

export default Alert;
