import React from 'react';
import styled from 'styled-components';

const xmlHeader = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' overflow='visible' height='100%' viewBox='0 0 24 24'`;
const waveImg = `${xmlHeader} stroke='%23000' stroke-width='1' fill='none' stroke-linecap='square' stroke-miterlimit='10'%3E%3Cpath d='M0,6c6,0,6,13,12,13S18,6,24,6'/%3E%3C/svg%3E`;
const solidImg = `${xmlHeader} fill='%23000' stroke='none'%3E%3Cpath d='M24,8v12H0V8H24z M24,4v1H0V4H24z'/%3E%3C/svg%3E`;

type DividerProps = {
  line: 'solid' | 'wave';
};

const DividerSolid = styled.div`
  width: 100%;
  height: 20px;
  margin: 8px 0px;
  background: url(\"${solidImg}\");
  background-size: 20px 100%;
`;

const DividerWave = styled.div`
  width: 100%;
  height: 20px;
  margin: 8px 0px;
  background: url(\"${waveImg}\");
  background-size: 20px 100%;
`;

const Divider = ({ line }: DividerProps) => {
  if (line === 'solid') {
    return <DividerSolid />;
  }
  return <DividerWave />;
};

export default Divider;
