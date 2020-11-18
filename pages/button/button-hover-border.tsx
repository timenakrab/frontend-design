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
          <ButtonHover oneLine className="remove-border-color-button">
            Hover One Line
          </ButtonHover>
        </WarpButton>
        <WarpButton>
          <ButtonHover
            twoLine
            backgroundColor="#41436a"
            lineColor="#f54768"
            textColor="#ff9678"
            className="remove-border-color-button"
          >
            Hover Two Line
          </ButtonHover>
        </WarpButton>
        <WarpButton>
          <ButtonHover
            fourLine
            backgroundColor="#ffe3b3"
            lineColor="#dd4470"
            textColor="#fe72a9"
            className="remove-border-color-button"
          >
            Hover Four Line
          </ButtonHover>
        </WarpButton>
      </ContainerFlex>
      <CodePreview
        language="tsx"
        codeString={`
        ...
          <ButtonHover
            fourLine
            backgroundColor="#ffe3b3"
            lineColor="#dd4470"
            textColor="#fe72a9"
            className="remove-border-color-button"
          >
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
