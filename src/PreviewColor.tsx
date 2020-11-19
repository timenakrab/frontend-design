import React from 'react';
import styled from 'styled-components';

const SectionColorReview = styled.div`
  font-family: 'Kanit';
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
`;
const LabelColor = styled.div<{ bgColor: string }>`
  height: 22px;
  width: 22px;
  margin-right: 4px;
  background-color: ${(props) => props.bgColor};
  border-radius: 4px;
  border: 1px solid #282b36;
  float: left;
`;

interface PreviewColorProps {
  color: string;
}

const PreviewColor = ({ color }: PreviewColorProps) => {
  return (
    <SectionColorReview>
      <LabelColor bgColor={color} />
      <span>{color}</span>
    </SectionColorReview>
  );
};

export default PreviewColor;
