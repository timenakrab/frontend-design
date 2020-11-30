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

const Design = styled.button<IBtn>`
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
const Default = styled.button`
  background-color: ${colors.default.secondary};
  min-height: ${unit * 5}px;
  max-height: ${unit * 5}px;
  padding: 8px;
  cursor: pointer;
  outline: 0px;
  box-shadow: none;
  border: 1px solid ${colors.text.superlight};
  border-radius: ${unit}px;
  min-width: ${unit * 20}px;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Kanit', sans-serif;
  color: ${colors.text.dark};
  &:hover {
    background-color: ${colors.default.primary};
  }
  &:disabled {
    cursor: no-drop;
    background-color: ${colors.default.disable};
    border: 1px solid ${colors.background.transparent};
    color: ${colors.text.light};
  }
`;

const Button: React.FC<IButton> = (props: IButton) => {
  const { children, typeButton, disabled } = props;
  if (typeButton === 'default') {
    return (
      <Default {...props} disabled={disabled}>
        {children}
      </Default>
    );
  }
  return (
    <Design {...props} bgColor={colors[typeButton]} disabled={disabled}>
      {children}
    </Design>
  );
};

Button.defaultProps = {
  typeButton: 'default',
};

export default Button;
