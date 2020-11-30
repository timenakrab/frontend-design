import React from 'react';
import styled from 'styled-components';

import { bgStyles, buttonStyles, ColorProps, ColorTypes, textStyles, unit } from './styleguilde';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  buttonType?: ColorTypes;
}
interface IBtn {
  bgColor: ColorProps;
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
  color: ${textStyles.white};
  &:hover {
    background-color: ${(props) => props.bgColor.primary};
  }
  &:disabled {
    cursor: no-drop;
    background-color: ${(props) => props.bgColor.disable};
  }
`;
const Default = styled.button`
  background-color: ${buttonStyles.default.secondary};
  min-height: ${unit * 5}px;
  max-height: ${unit * 5}px;
  padding: 8px;
  cursor: pointer;
  outline: 0px;
  box-shadow: none;
  border: 1px solid ${textStyles.superlight};
  border-radius: ${unit}px;
  min-width: ${unit * 20}px;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Kanit', sans-serif;
  color: ${textStyles.dark};
  &:hover {
    background-color: ${buttonStyles.default.primary};
  }
  &:disabled {
    cursor: no-drop;
    background-color: ${buttonStyles.default.disable};
    border: 1px solid ${bgStyles.transparent};
    color: ${textStyles.light};
  }
`;

const Button: React.FC<IButton> = (props: IButton) => {
  const { children, buttonType, disabled } = props;
  if (buttonType === 'default') {
    return (
      <Default {...props} disabled={disabled}>
        {children}
      </Default>
    );
  }
  return (
    <Design {...props} bgColor={buttonStyles[buttonType]} disabled={disabled}>
      {children}
    </Design>
  );
};

Button.defaultProps = {
  buttonType: 'default',
};

export default Button;
