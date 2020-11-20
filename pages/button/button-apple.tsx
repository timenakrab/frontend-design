import React from 'react';
import styled from 'styled-components';

import ButtonApple from '../../src/button/ButtonApple';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  background-color: #1784c3;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  background-color: rgba(236, 232, 232, 0.6);
  padding: 5px 0px;
`;
const WarpButton = styled.div`
  margin: 5px 10px;
`;

const ButtonApplePage = () => {
  return (
    <Root>
      <Menu>
        <WarpButton>
          <ButtonApple iconClass="fas fa-wifi" label="Wi-Fi" value="Not Connected" />
        </WarpButton>
        <WarpButton>
          <ButtonApple iconClass="fab fa-bluetooth-b" label="Bluetooth" value="On" active />
        </WarpButton>
      </Menu>
    </Root>
  );
};

export default ButtonApplePage;
