import { NextRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

import {
  SwitchMobileLink,
  SwitchMobilePreview,
  SwitchMobileRequire,
  SwitchMobileSource,
} from '../../src/codePreview/SwitchMobilePreview';
import Divider from '../../src/Divider';
import MainLayout from '../../src/MainLayout';
import Text from '../../src/Text';
import SwitchMobile from '../../src/toggle/SwitchMobile';
import WarpCompPreview from '../../src/WarpCompPreview';

const SectionToggle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WarpToggle = styled.div`
  margin: 8px;
`;

type TogglePageProps = {
  router: NextRouter;
};

const TogglePage = ({ router }: TogglePageProps) => {
  return (
    <MainLayout pathname={router.pathname} customStyle={{ padding: '0px 16px' }}>
      <Text h1 customStyles={{ textTransform: 'uppercase', letterSpacing: 1 }}>
        toggle components
      </Text>
      <Divider line="solid" />
      <WarpCompPreview
        title="toggle (design with mobile)"
        exampleLink={SwitchMobileLink}
        sourceCodeLink={SwitchMobileSource}
        flexDirection="column"
        codeLanguage="tsx"
        codePreview={SwitchMobilePreview}
        requireData={SwitchMobileRequire}
      >
        <SectionToggle>
          <WarpToggle>
            <SwitchMobile size={30} />
          </WarpToggle>
          <WarpToggle>
            <SwitchMobile />
          </WarpToggle>
          <WarpToggle>
            <SwitchMobile
              uncheckedColor="grey"
              checkedColor="white"
              // eslint-disable-next-line no-alert
              callbackFunc={(checked) => alert(checked)}
            />
          </WarpToggle>
        </SectionToggle>
      </WarpCompPreview>
    </MainLayout>
  );
};

export default TogglePage;
