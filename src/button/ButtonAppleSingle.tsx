import React, { ReactElement } from 'react';
import styled from 'styled-components';

const BtnApple = styled.button<{ isNext: boolean }>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  width: 130px;
  padding: 2px 8px;
  border-radius: 8px;
  border: 0px;
  background-color: rgba(236, 232, 232, 0.4);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.075);
  cursor: pointer;
  &::after {
    display: ${(props) => (props.isNext ? 'block' : 'none')};
    font-family: 'Font Awesome 5 Free';
    content: '\f105';
    font-size: 12px;
    font-weight: 900;
    color: ${(props) => (props.isNext ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)')};
    position: absolute;
    right: 6px;
  }
`;
const SectionIcon = styled.div`
  width: 28px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WarpIcon = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background-color: ${(props) => (props.active ? '#0984ff' : '#c6c6c6')};
  border-radius: 50%;
`;
const Icon = styled.i<{ active: boolean }>`
  font-size: 14px;
  color: ${(props) => (props.active ? '#ffffff' : '#a8a9a9')};
`;
const WarpLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(100% - 32px);
  height: 36px;
  padding-left: 4px;
`;
const Label = styled.p`
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
  text-align: left;
  color: #434343;
  margin: 0px;
`;
const Value = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  min-height: calc(12px);
  max-height: calc(12px);
  height: auto;
  font-size: 11px;
  line-height: 12px;
  text-align: left;
  color: #797671;
  position: relative;
  overflow: hidden;
  margin: 0px;
`;

interface IButtonApple {
  icon: string | ReactElement;
  label: string;
  value: string;
  active?: boolean;
  isNext?: boolean;
}

const ButtonApple = ({ icon, label, value, active, isNext }: IButtonApple) => {
  return (
    <BtnApple className="remove-border-color-button" isNext={isNext}>
      <SectionIcon>
        <WarpIcon active={active}>
          {typeof icon === 'string' ? <Icon className={icon} active={active} /> : icon}
        </WarpIcon>
      </SectionIcon>
      <WarpLabel>
        <Label>{label}</Label>
        <Value>{value}</Value>
      </WarpLabel>
    </BtnApple>
  );
};

ButtonApple.defaultProps = {
  active: false,
  isNext: false,
};

export default ButtonApple;
