import React from 'react';
import styled from 'styled-components';

import { colors, unit } from './styleguilde';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  typeButton?: 'error' | 'warning' | 'success' | 'info' | 'default';
}
interface IBtn {
  bgColor: {
    primary: string;
    secondary: string;
    disable: string;
  };
  disabled?: boolean;
}

const Btn = styled.button<IBtn>`
  background-color: ${(props) => props.bgColor.secondary};
  min-height: ${unit * 5}px;
  max-height: ${unit * 5}px;
  padding: 8px;
  cursor: pointer;
  outline: 0px;
  box-shadow: none;
  border: 0px solid transparent;
  border-radius: ${unit}px;
  min-width: ${unit * 20}px;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Kanit', sans-serif;
  color: ${colors.text.white};
  &:hover {
    background-color: ${(props) => props.bgColor.primary};
  }
  &:disabled {
    cursor: no-drop;
    background-color: ${(props) => props.bgColor.disable};
  }
`;

const Button: React.FC<IButton> = (props: IButton) => {
  const { children, typeButton, disabled } = props;
  return (
    <Btn {...props} bgColor={colors[typeButton]} disabled={disabled}>
      {children}
    </Btn>
  );
};

Button.defaultProps = {
  typeButton: 'default',
};

export default Button;
