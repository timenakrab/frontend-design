import React from 'react';
import styled from 'styled-components';

const BtnApple = styled.button`
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 176px;
  padding: 10px;
  border-radius: 14px;
  border: 0px;
  background-color: rgba(236, 232, 232, 0.6);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.075);
  cursor: pointer;
`;
const WarpIcon = styled.div<{ active: boolean }>`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.active ? '#0984ff' : '#c6c6c6')};
  border-radius: 50%;
  margin-right: 8px;
`;
const Icon = styled.i<{ active: boolean }>`
  font-size: 18px;
  color: ${(props) => (props.active ? '#ffffff' : '#a8a9a9')};
`;
const WarpLabel = styled.div`
  width: calc(100% - 44px);
  height: 36px;
`;
const Label = styled.p`
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
  text-align: left;
  color: #434343;
  margin: 0px;
`;
const Value = styled.p`
  font-size: 13px;
  line-height: 16px;
  text-align: left;
  color: #797671;
  margin: 0px;
`;

interface IButtonApple {
  iconClass: string;
  label: string;
  value: string;
  active?: boolean;
}

const ButtonApple = ({ iconClass, label, value, active }: IButtonApple) => {
  return (
    <BtnApple className="remove-border-color-button">
      <WarpIcon active={active}>
        <Icon className={iconClass} active={active} />
      </WarpIcon>
      <WarpLabel>
        <Label>{label}</Label>
        <Value>{value}</Value>
      </WarpLabel>
    </BtnApple>
  );
};

ButtonApple.defaultProps = {
  active: false,
};

export default ButtonApple;
