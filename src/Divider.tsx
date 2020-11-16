import React from 'react';
import styled from 'styled-components';

const DividerLine = styled.div`
  height: 0;
  margin: 8px 0;
  overflow: hidden;
  border-top: 1px solid #41436a;
`;

const Divider = () => {
  return <DividerLine />;
};

export default Divider;
