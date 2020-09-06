import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  position: ralative;
  padding: 8px 0px;
  cursor: pointer;
`;
const CheckBox = styled.input`
  appearance: none;
  display: none;
`;
const SwitchBlock = styled.span`
  position: relative;
  display: block;
  width: ${(props) => props.itemSize * 2}px;
  height: ${(props) => props.itemSize}px;
  background-color: #222222;
  border-radius: ${(props) => props.itemSize}px;
  box-shadow: inset 0px 2px 15px rgba(0, 0, 0, 0.2), inset 0px 2px 2px rgba(0, 0, 0, 0.2),
    inset 0px -1px 1px rgba(0, 0, 0, 0.2);
`;
const SwitchBody = styled.i`
  position: absolute;
  top: 0px;
  left: ${(props) => (props.checked ? props.itemSize : '0')}px;
  width: ${(props) => props.itemSize}px;
  height: ${(props) => props.itemSize}px;
  background: linear-gradient(to bottom, #444444, #222222);
  border-radius: 50%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5), inset 0px 1px 1px rgba(255, 255, 255, 0.1);
  transition: 0.5s;
  transform: scale(0.9);
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${(props) => props.itemSize / 8}px;
    height: ${(props) => props.itemSize / 8}px;
    background-color: ${(props) => (props.checked ? props.checkedColor : props.uncheckedColor)};
    border-radius: 50%;
    transition: 0.5s;
    box-shadow: 0px 0px 2px
        ${(props) => (props.checked ? props.checkedColor : props.uncheckedColor)},
      0px 0px 5px ${(props) => (props.checked ? props.checkedColor : props.uncheckedColor)},
      0px 0px 10px ${(props) => (props.checked ? props.checkedColor : props.uncheckedColor)},
      0px 0px 15px ${(props) => (props.checked ? props.checkedColor : props.uncheckedColor)},
      0px 0px 20px ${(props) => (props.checked ? props.checkedColor : props.uncheckedColor)};
  }
`;

const Switch = ({ size, uncheckedColor, checkedColor, callbackFunc }) => {
  const [checked, setChecked] = useState(false);
  return (
    <Label>
      <CheckBox
        type="checkbox"
        checked={checked}
        onChange={() => {
          callbackFunc(checked);
        }}
      />
      <SwitchBlock itemSize={size} onClick={() => setChecked(!checked)}>
        <SwitchBody
          itemSize={size}
          checked={checked}
          uncheckedColor={uncheckedColor}
          checkedColor={checkedColor}
        />
      </SwitchBlock>
    </Label>
  );
};

Switch.defaultProps = {
  size: 40,
  uncheckedColor: '#ff0000',
  checkedColor: '#00ff00',
  callbackFunc: () => {},
};

Switch.propTypes = {
  size: PropTypes.number,
  uncheckedColor: PropTypes.string,
  checkedColor: PropTypes.string,
  callbackFunc: PropTypes.func,
};

export default Switch;
