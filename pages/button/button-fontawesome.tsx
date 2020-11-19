/* ref: https://www.youtube.com/watch?v=SVY3Mbq2L_I */
import React from 'react';
import styled from 'styled-components';

import ButtonIconFA from '../../src/button/ButtonIconFA';
import CodePreview from '../../src/CodePreview';
import { ButtonIconFAPreview } from '../../src/codePreview/ButtonIconFAPreview';
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

const ButtonFontAwesome = () => {
  return (
    <Root>
      <ContainerFlex flexDirection="row">
        <WarpButton>
          <ButtonIconFA icon="fa-facebook-f" bgColor="#1877f2" link="https://www.facebook.com" />
        </WarpButton>
        <WarpButton>
          <ButtonIconFA icon="fa-twitter" bgColor="#1da1f2" link="https://twitter.com" />
        </WarpButton>
        <WarpButton>
          <ButtonIconFA icon="fa-instagram" bgColor="#c32aa3" link="https://www.instagram.com" />
        </WarpButton>
        <WarpButton>
          <ButtonIconFA icon="fa-line" bgColor="#00b900" link="https://www.line.me" />
        </WarpButton>
        <WarpButton>
          <ButtonIconFA icon="fa-tiktok" bgColor="#000000" link="https://www.tiktok.com" />
        </WarpButton>
      </ContainerFlex>
      <CodePreview language="tsx" codeString={ButtonIconFAPreview} />
    </Root>
  );
};

export default ButtonFontAwesome;
