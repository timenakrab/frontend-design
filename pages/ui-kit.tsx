import { NextRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

import MainLayout from '../src/MainLayout';
import Text from '../src/Text';
import Alert from '../src/uiKit/Alert';
import Button from '../src/uiKit/Button';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
`;
const WrapComp = styled.div`
  margin: 0px 16px 24px 16px;
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
            alertType="error"
          />
          <Alert
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            alertType="warning"
          />
          <Alert
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            alertType="success"
          />
          <Alert
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            alertType="info"
          />
        </WrapComp>
        <WrapComp>
          <Text h1 customStyles={{ textTransform: 'uppercase', letterSpacing: 1, marginTop: 0 }}>
            Buttons
          </Text>
          <div>
            <Button buttonType="error" className="mr-1 mb-1">
              Error
            </Button>
            <Button buttonType="warning" className="mr-1 mb-1">
              Warning
            </Button>
            <Button buttonType="success" className="mr-1 mb-1">
              Success
            </Button>
            <Button buttonType="info" className="mr-1 mb-1">
              Info
            </Button>
            <Button className="mr-1 mb-1">Default</Button>
          </div>
          <Text p customStyles={{ textTransform: 'uppercase', letterSpacing: 1 }}>
            Buttons (disabled)
          </Text>
          <div>
            <Button buttonType="error" className="mr-1 mb-1" disabled>
              Error disabled
            </Button>
            <Button buttonType="warning" className="mr-1 mb-1" disabled>
              Warning disabled
            </Button>
            <Button buttonType="success" className="mr-1 mb-1" disabled>
              Success disabled
            </Button>
            <Button buttonType="info" className="mr-1 mb-1" disabled>
              Info disabled
            </Button>
            <Button className="mr-1 mb-1" disabled>
              Default disabled
            </Button>
          </div>
        </WrapComp>
      </Background>
    </MainLayout>
  );
};

export default UIKitPage;
