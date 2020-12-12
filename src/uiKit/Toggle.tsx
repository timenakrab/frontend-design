import React, { useState } from 'react';
import styled from 'styled-components';

import { ColorTypes, toggleStyles } from './styleguilde';

type ToggleBodyProps = {
  checked: boolean;
  itemSize: number;
  checkedColor: string;
  uncheckedColor: string;
};
type SwitchBlockProps = {
  itemSize: number;
  activeColor: string;
};
type LabelProps = {
  itemSize: number;
};

const ToggleSection = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-bottom: 8px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;
const CheckBox = styled.input`
  appearance: none;
  display: none;
`;
const SwitchBlock = styled.span<SwitchBlockProps>`
  position: relative;
  display: block;
  width: ${(props) => props.itemSize * 2}px;
  height: ${(props) => props.itemSize}px;
  background-color: #ffffff;
  border-radius: ${(props) => props.itemSize}px;
  box-shadow: inset 0px 2px 15px rgba(0, 0, 0, 0.2), inset 0px 2px 2px rgba(0, 0, 0, 0.2),
    inset 0px -1px 1px rgba(0, 0, 0, 0.2);
  transition-delay: 0.1s;
  &.active {
    background-color: ${(props) => props.activeColor};
  }
`;
const SwitchBody = styled.i<ToggleBodyProps>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: ${(props) => props.itemSize}px;
  height: ${(props) => props.itemSize}px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5), inset 0px 1px 1px rgba(255, 255, 255, 0.1);
  transition: 0.5s;
  transform: scale(1.02);
  ${SwitchBlock}.active & {
    left: ${(props) => props.itemSize}px;
  }
`;
const Label = styled.div<LabelProps>`
  width: calc(100% - ${(props) => props.itemSize * 2}px);
  padding: 0px 8px;
  font-family: 'Kanit';
  font-size: 16px;
  line-height: 20px;
`;

interface Itoggle {
  label: string;
  checked?: boolean;
  size?: number;
  customColor?: string;
  colorType?: ColorTypes;
  callbackFunc?: (checked: boolean) => void;
}

const Toggle: React.FC<Itoggle> = (props: Itoggle) => {
  const { label, checked, size, customColor, colorType, callbackFunc } = props;
  const [isToggle, setToggle] = useState(checked);
  let color = toggleStyles[colorType].secondary;
  if (customColor) {
    color = customColor;
  }
  return (
    <ToggleSection onClick={() => setToggle(!isToggle)}>
      <span>
        <CheckBox
          type="checkbox"
          checked={isToggle}
          onChange={() => {
            callbackFunc(isToggle);
          }}
        />
        <SwitchBlock className={isToggle ? 'active' : ''} activeColor={color} itemSize={size}>
          <SwitchBody
            itemSize={size}
            checked={isToggle}
            uncheckedColor="transparent"
            checkedColor="transparent"
          />
        </SwitchBlock>
      </span>
      <Label itemSize={size}>{label}</Label>
    </ToggleSection>
  );
};

Toggle.defaultProps = {
  size: 20,
  checked: false,
  customColor: '',
  colorType: 'default',
  callbackFunc: () => {},
};

export default Toggle;
