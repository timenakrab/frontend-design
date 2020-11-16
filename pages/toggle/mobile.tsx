/* ref: https://www.youtube.com/watch?v=p58K05YD98A */
import React from 'react';
import styled from 'styled-components';

import CodePreview from '../../src/CodePreview';
import ContainerFlex from '../../src/ContainerFlex';
import SwitchMobile from '../../src/switch-page/SwitchMobile';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  background-color: #2b2b2b;
`;

const ToggleMobile = () => {
  return (
    <Root>
      <ContainerFlex flexDirection="column">
        <SwitchMobile />
        <SwitchMobile size={60} />
        <SwitchMobile size={100} uncheckedColor="grey" checkedColor="white" />
      </ContainerFlex>
      <CodePreview
        language="tsx"
        codeString={`
        import SwitchMobile from '../src/switch-page/SwitchMobile';
        ...
        <SwitchMobile />
        <SwitchMobile size={60} />
        <SwitchMobile size={100} uncheckedColor="grey" checkedColor="white" />
        ...
        `}
      />
    </Root>
  );
};

ToggleMobile.propTypes = {};

export default ToggleMobile;
