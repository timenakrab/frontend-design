import React from 'react';
import styled from 'styled-components';

import { ChildrenProps } from './type/custom';

type ContainerStyle = {
  flexDirection: 'row' | 'column';
  backgroundColor: string;
};

const Container = styled.div<ContainerStyle>`
  width: 100%;
  padding: 16px 0px;
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  background-color: ${(props) => props.backgroundColor};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

interface ContainerFlexProps {
  flexDirection?: 'row' | 'column';
  backgroundColor?: string;
  children: ChildrenProps;
}

const ContainerFlex = ({ flexDirection, backgroundColor, children }: ContainerFlexProps) => {
  return (
    <Container flexDirection={flexDirection} backgroundColor={backgroundColor}>
      {children}
    </Container>
  );
};

ContainerFlex.defaultProps = {
  flexDirection: 'row',
  backgroundColor: '#ffffff',
};

export default ContainerFlex;
