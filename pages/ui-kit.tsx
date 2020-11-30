import { NextRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

import MainLayout from '../src/MainLayout';
import Text from '../src/Text';
import Alert from '../src/uiKit/Alert';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
`;
const WrapComp = styled.div`
  margin: 0px 16px 16px 16px;
`;

type UIKitProps = {
  router: NextRouter;
};

const UIKitPage = ({ router }: UIKitProps) => {
  return (
    <MainLayout pathname={router.pathname}>
      <Background>
        <WrapComp>
          <Text h1 customStyles={{ textTransform: 'uppercase', letterSpacing: 1, marginTop: 0 }}>
            Alerts
          </Text>
          <Alert
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            type="error"
          />
          <Alert
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            type="warning"
          />
          <Alert
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            type="success"
          />
          <Alert
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            type="info"
          />
        </WrapComp>
      </Background>
    </MainLayout>
  );
};

export default UIKitPage;
