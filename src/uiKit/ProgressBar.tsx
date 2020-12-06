import React from 'react';
import styled from 'styled-components';

import { bgStyles, ColorTypes, progressStyles, textStyles } from './styleguilde';

interface IProgressBar {
  value?: number;
  progressType?: ColorTypes;
  isDisplay?: boolean;
}
interface BarProps {
  ariaValuenow: number;
  bgColor: string;
}
interface ValueProps {
  display: string;
}
const Progess = styled.div`
  display: flex;
  height: 16px;
  overflow: hidden;
  line-height: 0;
  font-size: 12px;
  background-color: ${bgStyles.white};
  border: 1px solid ${textStyles.superlight};
  border-radius: 8px;
  width: 100%;
  margin-bottom: 8px;
`;
const Bar = styled.div<BarProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: ${(props) => props.bgColor};
  width: ${(props) => props.ariaValuenow}%;
`;
const Value = styled.span<ValueProps>`
  display: ${(props) => props.display};
  font-family: 'Kanit';
`;

const ProgressBar: React.FC<IProgressBar> = ({ value, progressType, isDisplay }: IProgressBar) => {
  let color = progressStyles[progressType].primary;
  if (progressType === 'default') {
    color = '#8a92a5';
  }
  let valueNow = value;
  if (valueNow < 0) {
    valueNow = 0;
  } else if (valueNow > 100) {
    valueNow = 100;
  }
  const display = isDisplay ? 'block' : 'none';
  return (
    <Progess>
      <Bar ariaValuenow={valueNow} bgColor={color}>
        <Value display={display}>{`${valueNow}%`}</Value>
      </Bar>
    </Progess>
  );
};

ProgressBar.defaultProps = {
  value: 0,
  progressType: 'default',
  isDisplay: false,
};

export default ProgressBar;
