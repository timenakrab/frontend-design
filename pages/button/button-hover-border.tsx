import React from 'react';
import styled from 'styled-components';

import ButtonHover from '../../src/button/ButtonHover';
import CodePreview from '../../src/CodePreview';
import ContainerFlex from '../../src/ContainerFlex';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  background-color: #f5f5f5;
`;
const WarpButton = styled.div`
  margin: 8px;
`;

const ButtonHoverBorder = () => {
  return (
    <Root>
      <ContainerFlex flexDirection="row" backgroundColor="transparent">
        <WarpButton>
          <ButtonHover oneLine backgroundColor="#f54785" lineColor="#98073b" textColor="#ffffff">
            Hover One Line
          </ButtonHover>
        </WarpButton>
        <WarpButton>
          <ButtonHover twoLine backgroundColor="#f54785" lineColor="#98073b" textColor="#ffffff">
            Hover Two Line
          </ButtonHover>
        </WarpButton>
        <WarpButton>
          <ButtonHover fourLine backgroundColor="#f54785" lineColor="#98073b" textColor="#ffffff">
            Hover Four Line
          </ButtonHover>
        </WarpButton>
      </ContainerFlex>
      <CodePreview
        language="tsx"
        codeString={`
        ...
        <ButtonHover oneLine backgroundColor="#f54785" lineColor="#98073b" textColor="#ffffff">
          Hover One Line
        </ButtonHover>
        ...
        <ButtonHover twoLine backgroundColor="#f54785" lineColor="#98073b" textColor="#ffffff">
          Hover Two Line
        </ButtonHover>
        ...
        <ButtonHover fourLine backgroundColor="#f54785" lineColor="#98073b" textColor="#ffffff">
          Hover Four Line
        </ButtonHover>
        ...
        `}
        customStyles={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      />
    </Root>
  );
};

export default ButtonHoverBorder;
