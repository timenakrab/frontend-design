import React from 'react';
import styled from 'styled-components';

import { colors, unit } from './styleguilde';

interface IAlert {
  text: string;
  type: 'error' | 'warning' | 'success' | 'info';
}
interface IBody {
  bgColor: string;
}

const AlertBody = styled.div<IBody>`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-radius: ${unit * 2}px;
  background-color: ${(props) => props.bgColor};
  margin-bottom: ${unit}px;
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
const Close = styled.button`
  width: ${unit * 5}px;
  height: ${unit * 5}px;
  padding: 0px;
  border: 0px;
  background-color: ${colors.background.transparent};
  cursor: pointer;
  outline: 0px;
  box-shadow: none;
  border: 0px solid transparent;
  & > i {
    font-size: 20px;
    color: ${colors.text.white};
  }
`;

const Alert = (props: IAlert) => {
  const { text, type } = props;
  return (
    <AlertBody bgColor={colors[type].primary}>
      <AlertText>{text}</AlertText>
      <Close type="button">
        <i className="fas fa-times" />
      </Close>
    </AlertBody>
  );
};

export default Alert;
