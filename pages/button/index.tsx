import Link from 'next/link';
import { NextRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

import ButtonIconFA from '../../src/button/ButtonIconFA';
import CodePreview from '../../src/CodePreview';
import Divider from '../../src/Divider';
import MainLayout from '../../src/MainLayout';
import TableRequirefield from '../../src/TableRequirefield';
import Text from '../../src/Text';

const WarpButtonComp = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 16px 0px;
  align-items: flex-start;
`;
const SectionButton = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
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
const WarpButton = styled.div`
  margin: 8px;
`;
const SOURCE_CODE_LINK = 'https://raw.githubusercontent.com/timenakrab/frontend-design/master';

type ButtonPageProps = {
  router: NextRouter;
};

const ButtonPage = ({ router }: ButtonPageProps) => {
  return (
    <MainLayout pathname={router.pathname}>
      <Text h1 customStyles={{ textTransform: 'uppercase', letterSpacing: 1 }}>
        button components
      </Text>
      <Divider />
      <Text h2 customStyles={{ textTransform: 'uppercase', letterSpacing: 1 }}>
        button (hover effects)
      </Text>
      <WarpButtonComp>
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
        <SectionCode>
          <CodePreview
            language="tsx"
            codeString={`
              <ButtonIconFA
                icon="fa-facebook-f"
                bgColor="#1877f2"
                link="https://www.facebook.com"
              />
              /** icon with https://fontawesome.com **
               * default bgColor = #ffffff
               * default link = /#
               * default onClick = () => {} 
               **************************************/
            `}
            customStyles={{ padding: 0 }}
          />
          <TableRequirefield
            body={[
              {
                name: 'icon',
                type: 'string',
                require: true,
              },
              {
                name: 'bgColor',
                type: 'string',
                require: false,
              },
              {
                name: 'link',
                type: 'string',
                require: false,
              },
              {
                name: 'onClick',
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
      </WarpButtonComp>
    </MainLayout>
  );
};

export default ButtonPage;
