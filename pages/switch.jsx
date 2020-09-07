/* ref: https://www.youtube.com/watch?v=p58K05YD98A */
import React from 'react';
import styled from 'styled-components';
import SwitchMobile from '../src/switch-page/SwitchMobile';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  background-color: #2b2b2b;
`;

const Switch = () => {
  return (
    <Root>
      <SwitchMobile />
      <SwitchMobile size={60} />
      <SwitchMobile size={100} uncheckedColor="grey" checkedColor="white" />
    </Root>
  );
};

Switch.propTypes = {};

export default Switch;
