import { NextRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

import ButtonHoverBorder from '../../src/button/ButtonHoverBorder';
import ButtonIconFA from '../../src/button/ButtonIconFA';
import SwitchMobile from '../../src/button/SwitchMobile';
import {
  ButtonHoverBorderLink,
  ButtonHoverBorderPreview,
  ButtonHoverBorderRequire,
  ButtonHoverBorderSource,
} from '../../src/codePreview/ButtonHoverBorderPreview';
import {
  ButtonIconFALink,
  ButtonIconFAPreview,
  ButtonIconFARequire,
  ButtonIconFASource,
} from '../../src/codePreview/ButtonIconFAPreview';
import {
  SwitchMobileLink,
  SwitchMobilePreview,
  SwitchMobileRequire,
  SwitchMobileSource,
} from '../../src/codePreview/SwitchMobilePreview';
import Divider from '../../src/Divider';
import MainLayout from '../../src/MainLayout';
import Text from '../../src/Text';
import WarpCompPreview from '../../src/WarpCompPreview';

const headerPageStyle: React.CSSProperties = {
  textTransform: 'uppercase',
  letterSpacing: 1,
  margin: 0,
  paddingTop: 16,
};
const SectionButton = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const WarpButton = styled.div`
  margin: 8px;
`;

type ButtonPageProps = {
  router: NextRouter;
};

const ButtonPage = ({ router }: ButtonPageProps) => {
  return (
    <MainLayout
      pathname={router.pathname}
      customStyle={{ padding: '0px 16px' }}
      seoData={{
        title: 'Button Components',
        desc: 'design buttons',
        url: '/button',
        keywords: 'time-pai-ruey,design,buttons,button components',
      }}
    >
      <Text type="h1" style={headerPageStyle}>
        button components
      </Text>
      <Divider line="solid" />
      <WarpCompPreview
        title="Anchor Fontawesome Icon (hover effects)"
        exampleLink={ButtonIconFALink}
        sourceCodeLink={ButtonIconFASource}
        flexDirection="column"
        codeLanguage="tsx"
        codePreview={ButtonIconFAPreview}
        requireData={ButtonIconFARequire}
      >
        <SectionButton>
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
        </SectionButton>
      </WarpCompPreview>
      <WarpCompPreview
        title="Button (border hover effects)"
        exampleLink={ButtonHoverBorderLink}
        sourceCodeLink={ButtonHoverBorderSource}
        flexDirection="column"
        codeLanguage="tsx"
        codePreview={ButtonHoverBorderPreview}
        requireData={ButtonHoverBorderRequire}
      >
        <SectionButton>
          <WarpButton>
            <ButtonHoverBorder oneLine className="remove-border-color-button">
              Hover One Line
            </ButtonHoverBorder>
          </WarpButton>
          <WarpButton>
            <ButtonHoverBorder
              twoLine
              backgroundColor="#41436a"
              lineColor="#f54768"
              textColor="#ff9678"
              className="remove-border-color-button"
            >
              Hover Two Line
            </ButtonHoverBorder>
          </WarpButton>
          <WarpButton>
            <ButtonHoverBorder
              fourLine
              backgroundColor="#ffe3b3"
              lineColor="#dd4470"
              textColor="#fe72a9"
              className="remove-border-color-button"
              // eslint-disable-next-line no-alert
              onClick={() => alert('onClick Four Line')}
            >
              Hover Four Line
            </ButtonHoverBorder>
          </WarpButton>
        </SectionButton>
      </WarpCompPreview>
      <WarpCompPreview
        title="toggle (design with mobile)"
        exampleLink={SwitchMobileLink}
        sourceCodeLink={SwitchMobileSource}
        flexDirection="column"
        codeLanguage="tsx"
        codePreview={SwitchMobilePreview}
        requireData={SwitchMobileRequire}
      >
        <SectionButton>
          <WarpButton>
            <SwitchMobile size={30} />
          </WarpButton>
          <WarpButton>
            <SwitchMobile />
          </WarpButton>
          <WarpButton>
            <SwitchMobile
              uncheckedColor="grey"
              checkedColor="white"
              // eslint-disable-next-line no-alert
              callbackFunc={(checked) => alert(checked)}
            />
          </WarpButton>
        </SectionButton>
      </WarpCompPreview>
    </MainLayout>
  );
};

export default ButtonPage;
