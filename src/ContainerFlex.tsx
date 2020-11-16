import React from 'react';
import styled from 'styled-components';

import { ChildrenProps } from './type/custom';

const Container = styled.div<{ flexDirection: 'row' | 'column' }>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

interface ContainerFlexProps {
  flexDirection?: 'row' | 'column';
  children: ChildrenProps;
}

const ContainerFlex = ({ flexDirection, children }: ContainerFlexProps) => {
  return <Container flexDirection={flexDirection}>{children}</Container>;
};

ContainerFlex.defaultProps = {
  flexDirection: 'row',
};

export default ContainerFlex;
