import React from 'react';
import styled from 'styled-components';

import ButtonAppleGroup from '../../src/button/ButtonAppleGroup';
import ButtonApple from '../../src/button/ButtonAppleSingle';
import Airdrop from '../../src/icons/Airdrop';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-height: 100vh;
  background-color: #1784c3;
  flex-wrap: wrap;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  background-color: rgba(236, 232, 232, 0.6);
  padding: 5px 0px;
  margin: 8px;
`;
const WarpButton = styled.div`
  margin: 5px 10px;
`;

const GroupMenu = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  background-color: rgba(236, 232, 232, 0.6);
  padding: 10px 8px;
  margin: 8px;
`;

const ButtonApplePage = () => {
  return (
    <Root>
      <Menu>
        <WarpButton>
          <ButtonApple icon="fas fa-wifi" label="Wi-Fi" value="Not Connected" />
        </WarpButton>
        <WarpButton>
          <ButtonApple icon="fab fa-bluetooth-b" label="Bluetooth" value="On" active />
        </WarpButton>
        <WarpButton>
          <ButtonApple
            icon={<Airdrop width={16} height={16} enable />}
            label="Airdrop"
            value="Contact Only"
            active
            isNext
          />
        </WarpButton>
      </Menu>
      <GroupMenu>
        <ButtonAppleGroup
          groupButton={[
            {
              icon: 'fas fa-wifi',
              label: 'Wi-Fi',
              value: 'Home',
              active: true,
              isNext: false,
            },
            {
              icon: 'fab fa-bluetooth-b',
              label: 'Bluetooth',
              value: 'Off',
              active: false,
              isNext: false,
            },
            {
              icon: <Airdrop width={16} height={16} enable />,
              label: 'Airdrop',
              value: 'Contacts Only',
              active: true,
              isNext: true,
            },
          ]}
        />
      </GroupMenu>
    </Root>
  );
};

export default ButtonApplePage;
