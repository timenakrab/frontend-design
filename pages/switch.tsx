/* ref: https://www.youtube.com/watch?v=p58K05YD98A */
import React from 'react';
import styled from 'styled-components';

import CodePreview from '../src/CodePreview';
import SwitchMobile from '../src/switch-page/SwitchMobile';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  background-color: #2b2b2b;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Switch = () => {
  return (
    <Root>
      <Container>
        <SwitchMobile />
        <SwitchMobile size={60} />
        <SwitchMobile size={100} uncheckedColor="grey" checkedColor="white" />
      </Container>
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

Switch.propTypes = {};

export default Switch;
