import { NextRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

import MainLayout from '../src/MainLayout';
import Text from '../src/Text';
import Alert from '../src/uiKit/Alert';
import Button from '../src/uiKit/Button';
import ProgressBar from '../src/uiKit/ProgressBar';
import QuickAction from '../src/uiKit/QuickAction';
import Toggle from '../src/uiKit/Toggle';

const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f9f9f9;
  @media (max-width: 600px) {
    margin-bottom: 5rem;
  }
`;
const WrapComp = styled.div`
  margin: 0px 16px 24px 16px;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

type UIKitProps = {
  router: NextRouter;
};

const UIKitPage = ({ router }: UIKitProps) => {
  return (
    <MainLayout
      pathname={router.pathname}
      seoData={{
        title: 'UI Kit',
        desc: 'design ui kit for developer',
        url: '/ui-kit',
        keywords: 'time-pai-ruey,design,ui-kit',
      }}
    >
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
          <FlexRow>
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
          </FlexRow>
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
        <WrapComp>
          <Text h1 customStyles={{ textTransform: 'uppercase', letterSpacing: 1, marginTop: 0 }}>
            Quick Actions
          </Text>
          <FlexRow>
            <QuickAction faClassName="fas fa-share-alt" className="mr-1 mb-1" buttonType="error" />
            <QuickAction faClassName="fas fa-plus" className="mr-1 mb-1" buttonType="warning" />
            <QuickAction faClassName="fas fa-check" className="mr-1 mb-1" buttonType="success" />
            <QuickAction faClassName="fas fa-info" className="mr-1 mb-1" buttonType="info" />
            <QuickAction faClassName="fas fa-copy" className="mr-1 mb-1" />
          </FlexRow>
          <Text p customStyles={{ textTransform: 'uppercase', letterSpacing: 1 }}>
            Quick Actions (disabled)
          </Text>
          <FlexRow>
            <QuickAction
              faClassName="fas fa-share-alt"
              className="mr-1 mb-1"
              buttonType="error"
              disabled
            />
            <QuickAction
              faClassName="fas fa-plus"
              className="mr-1 mb-1"
              buttonType="warning"
              disabled
            />
            <QuickAction
              faClassName="fas fa-check"
              className="mr-1 mb-1"
              buttonType="success"
              disabled
            />
            <QuickAction
              faClassName="fas fa-info"
              className="mr-1 mb-1"
              buttonType="info"
              disabled
            />
            <QuickAction faClassName="fas fa-copy" className="mr-1 mb-1" disabled />
          </FlexRow>
        </WrapComp>
        <WrapComp>
          <Text h1 customStyles={{ textTransform: 'uppercase', letterSpacing: 1, marginTop: 0 }}>
            Progress bar
          </Text>
          <ProgressBar value={10} />
          <ProgressBar value={25} progressType="error" />
          <ProgressBar value={50} progressType="warning" />
          <ProgressBar value={75} progressType="success" />
          <ProgressBar value={100} progressType="info" />
          <Text p customStyles={{ textTransform: 'uppercase', letterSpacing: 1 }}>
            Progress bar (Display value)
          </Text>
          <ProgressBar value={10} isDisplay />
          <ProgressBar value={25} progressType="error" isDisplay />
          <ProgressBar value={50} progressType="warning" isDisplay />
          <ProgressBar value={75} progressType="success" isDisplay />
          <ProgressBar value={100} progressType="info" isDisplay />
        </WrapComp>
        <WrapComp>
          <Text h1 customStyles={{ textTransform: 'uppercase', letterSpacing: 1, marginTop: 0 }}>
            Toggle
          </Text>
          <Toggle label="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          <Toggle
            colorType="error"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            checked
          />
          <Toggle
            colorType="warning"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          />
          <Toggle
            colorType="success"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            checked
          />
          <Toggle
            colorType="info"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          />
          <Toggle
            customColor="#d38cff"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            checked
          />
        </WrapComp>
      </Background>
    </MainLayout>
  );
};

export default UIKitPage;
