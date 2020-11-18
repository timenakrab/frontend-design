import Link from 'next/link';
import { NextRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

import CodePreview from '../../src/CodePreview';
import Divider from '../../src/Divider';
import MainLayout from '../../src/MainLayout';
import TableRequirefield from '../../src/TableRequirefield';
import Text from '../../src/Text';
import SwitchMobile from '../../src/toggle/SwitchMobile';

const WarpToggleComp = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 16px 0px;
  align-items: flex-start;
`;
const SectionToggle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SectionCode = styled.div`
  width: 100%;
`;
const SectionLinkExample = styled.div`
  display: flex;
  margin: 16px 0px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const LinkExample = styled.a`
  font-size: 18px;
  line-height: 24px;
  font-family: 'Kanit';
  color: #ff9678;
  text-transform: uppercase;
  margin: 4px;
`;
const WarpToggle = styled.div`
  margin: 8px;
`;
const SOURCE_CODE_LINK = 'https://raw.githubusercontent.com/timenakrab/frontend-design/master';

type TogglePageProps = {
  router: NextRouter;
};

const TogglePage = ({ router }: TogglePageProps) => {
  return (
    <MainLayout pathname={router.pathname}>
      <Text h1 customStyles={{ textTransform: 'uppercase', letterSpacing: 1 }}>
        toggle components
      </Text>
      <Divider line="solid" />
      <Text h2 customStyles={{ textTransform: 'uppercase', letterSpacing: 1 }}>
        toggle (design with mobile)
      </Text>
      <WarpToggleComp>
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
        <SectionCode>
          <CodePreview
            language="tsx"
            codeString={`
              <SwitchMobile
                size={60}
                uncheckedColor="grey"
                checkedColor="white"
                callbackFunc={(checked) => alert(checked)}
              />
              /**************************************
               * default size = 40
               * default uncheckedColor = #ff0000
               * default checkedColor = #00ff00
               * default callbackFunc = (checked: boolean) => {}
               **************************************/
            `}
            customStyles={{ padding: 0 }}
          />
          <TableRequirefield
            body={[
              {
                name: 'size',
                type: 'number',
                require: false,
              },
              {
                name: 'uncheckedColor',
                type: 'string',
                require: false,
              },
              {
                name: 'checkedColor',
                type: 'string',
                require: false,
              },
              {
                name: 'callbackFunc',
                type: 'function',
                require: false,
              },
            ]}
          />
          <SectionLinkExample>
            <Link href="/toggle/mobile">
              <LinkExample href="/toggle/mobile">example preview</LinkExample>
            </Link>
            <LinkExample href={`${SOURCE_CODE_LINK}/src/toggle/SwitchMobile.tsx`} target="_blank">
              source code
            </LinkExample>
          </SectionLinkExample>
        </SectionCode>
      </WarpToggleComp>
    </MainLayout>
  );
};

export default TogglePage;
