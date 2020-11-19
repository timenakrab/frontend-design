import React from 'react';
import styled from 'styled-components';

import { ChildrenProps } from '../type/custom';

type ButtonProps = {
  backgroundColor?: string;
  lineColor: string;
  textColor?: string;
};
const OneLineButton = styled.button<ButtonProps>`
  display: inline-block;
  position: relative;
  color: ${(props) => props.textColor};
  font-family: 'Kanit';
  font-size: 18px;
  line-height: 26px;
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor};
  padding: 8px 16px;
  &::before {
    content: '';
    width: 0;
    height: 2px;
    position: absolute;
    transition: all 0.2s linear;
    background-color: ${(props) => props.lineColor};
    right: 0;
    top: 0;
    transition-delay: 0.2s;
  }
  &::after {
    content: '';
    width: 0;
    height: 2px;
    position: absolute;
    transition: all 0.2s linear;
    background-color: ${(props) => props.lineColor};
    left: 0;
    bottom: 0;
    transition-delay: 0.6s;
  }
  &:hover::before {
    width: 100%;
    transition-delay: 0.4s;
  }
  &:hover::after {
    width: 100%;
    transition-delay: 0s;
  }
`;
const ChildOne = styled.span<ButtonProps>`
  display: block;
  &::before {
    content: '';
    width: 2px;
    height: 0;
    position: absolute;
    transition: all 0.2s linear;
    background-color: ${(props) => props.lineColor};
    transition-delay: 0s;
    left: 0;
    top: 0;
  }
  &::after {
    content: '';
    width: 2px;
    height: 0;
    position: absolute;
    transition: all 0.2s linear;
    background-color: ${(props) => props.lineColor};
    transition-delay: 0.4s;
    right: 0;
    bottom: 0;
  }
  ${OneLineButton}:hover &::before {
    height: 100%;
    transition-delay: 0.6s;
  }
  ${OneLineButton}:hover &::after {
    height: 100%;
    transition-delay: 0.2s;
  }
`;
const TwoLineButton = styled.button<ButtonProps>`
  display: inline-block;
  position: relative;
  color: ${(props) => props.textColor};
  font-family: 'Kanit';
  font-size: 18px;
  line-height: 26px;
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor};
  padding: 8px 16px;
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 0;
    height: 2px;
    transition: all 0.2s linear;
    background-color: ${(props) => props.lineColor};
    transition-delay: 0.2s;
  }
  &::after {
    position: absolute;
    content: '';
    bottom: 0;
    right: 0;
    width: 0;
    height: 2px;
    transition: all 0.2s linear;
    background-color: ${(props) => props.lineColor};
    transition-delay: 0.2s;
  }
  &:hover::before,
  &:hover::after {
    width: 100%;
    transition-delay: 0s;
  }
`;
const ChildTwo = styled.span<ButtonProps>`
  display: block;
  &::before {
    content: '';
    bottom: 0;
    left: 0;
    width: 2px;
    height: 0;
    position: absolute;
    transition: all 0.2s linear;
    background-color: ${(props) => props.lineColor};
    transition-delay: 0s;
  }
  &::after {
    content: '';
    top: 0;
    right: 0;
    width: 2px;
    height: 0;
    position: absolute;
    transition: all 0.2s linear;
    background-color: ${(props) => props.lineColor};
    transition-delay: 0s;
  }
  ${TwoLineButton}:hover &::before, ${TwoLineButton}:hover &::after {
    height: 100%;
    transition-delay: 0.2s;
  }
`;
const FourLineButton = styled.button<ButtonProps>`
  display: inline-block;
  position: relative;
  color: ${(props) => props.textColor};
  font-family: 'Kanit';
  font-size: 18px;
  line-height: 26px;
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor};
  padding: 8px 16px;
  &::before {
    content: '';
    width: 0;
    height: 2px;
    position: absolute;
    transition: all 0.2s linear;
    background-color: ${(props) => props.lineColor};
    left: 50%;
    top: 0;
    transition-duration: 0.4s;
  }
  &::after {
    content: '';
    width: 0;
    height: 2px;
    position: absolute;
    transition: all 0.2s linear;
    background-color: ${(props) => props.lineColor};
    left: 50%;
    bottom: 0;
    transition-duration: 0.4s;
  }
  &:hover::before,
  &:hover::after {
    width: 100%;
    left: 0;
  }
`;
const ChildFour = styled.span<ButtonProps>`
  display: block;
  &::before {
    content: '';
    width: 2px;
    height: 0;
    position: absolute;
    transition: all 0.2s linear;
    background-color: ${(props) => props.lineColor};
    left: 0;
    top: 50%;
    transition-duration: 0.4s;
  }
  &::after {
    content: '';
    width: 2px;
    height: 0;
    position: absolute;
    transition: all 0.2s linear;
    background-color: ${(props) => props.lineColor};
    right: 0;
    top: 50%;
    transition-duration: 0.4s;
  }
  ${FourLineButton}:hover &::before, ${FourLineButton}:hover &::after {
    height: 100%;
    top: 0;
  }
`;

interface ButtonHoverBorderProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ChildrenProps;
  textColor?: string;
  backgroundColor?: string;
  lineColor?: string;
  oneLine?: boolean;
  twoLine?: boolean;
  fourLine?: boolean;
}

const ButtonHoverBorder: React.FC<ButtonHoverBorderProps> = (props: ButtonHoverBorderProps) => {
  const { oneLine, twoLine, fourLine, children, textColor, backgroundColor, lineColor } = props;
  if (oneLine) {
    return (
      <OneLineButton
        {...props}
        backgroundColor={backgroundColor}
        lineColor={lineColor}
        textColor={textColor}
      >
        <ChildOne lineColor={lineColor}>{children}</ChildOne>
      </OneLineButton>
    );
  }
  if (twoLine) {
    return (
      <TwoLineButton
        {...props}
        backgroundColor={backgroundColor}
        lineColor={lineColor}
        textColor={textColor}
      >
        <ChildTwo lineColor={lineColor}>{children}</ChildTwo>
      </TwoLineButton>
    );
  }
  if (fourLine) {
    return (
      <FourLineButton
        {...props}
        backgroundColor={backgroundColor}
        lineColor={lineColor}
        textColor={textColor}
      >
        <ChildFour lineColor={lineColor}>{children}</ChildFour>
      </FourLineButton>
    );
  }
  return (
    <OneLineButton
      {...props}
      backgroundColor={backgroundColor}
      lineColor={lineColor}
      textColor={textColor}
    >
      <ChildOne lineColor={lineColor}>{children}</ChildOne>
    </OneLineButton>
  );
};

ButtonHoverBorder.defaultProps = {
  textColor: '#000000',
  backgroundColor: '#d0d0d0',
  lineColor: '#000000',
  oneLine: false,
  twoLine: false,
  fourLine: false,
};

export default ButtonHoverBorder;
