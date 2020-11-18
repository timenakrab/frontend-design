import Link from 'next/link';
import { NextRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

import ButtonHoverBorder from '../../src/button/ButtonHoverBorder';
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
const SOURCE_CODE_LINK = 'https://github.com/timenakrab/frontend-design/blob/master';

type ButtonPageProps = {
  router: NextRouter;
};

const ButtonPage = ({ router }: ButtonPageProps) => {
  return (
    <MainLayout pathname={router.pathname}>
      <Text h1 customStyles={{ textTransform: 'uppercase', letterSpacing: 1 }}>
        button components
      </Text>
      <Divider line="solid" />
      <Text h2 customStyles={{ textTransform: 'uppercase', letterSpacing: 1 }}>
        Anchor (hover effects)
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
      <Divider line="wave" />
      <Text h2 customStyles={{ textTransform: 'uppercase', letterSpacing: 1 }}>
        Button (border hover effects)
      </Text>
      <WarpButtonComp>
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
              onClick={() => alert('onClick Four Line')}
            >
              Hover Four Line
            </ButtonHoverBorder>
          </WarpButton>
        </SectionButton>
        <SectionCode>
          <CodePreview
            language="tsx"
            codeString={`
            <ButtonHover
              backgroundColor="#ffe3b3"
              lineColor="#dd4470"
              textColor="#fe72a9"
              fourLine
            >
              Hover Four Line
            </ButtonHover>
              /**************************************
               * default backgroundColor = #d0d0d0
               * default textColor = #000000
               * default lineColor = #000000
               * default oneLine (oneLine, twoLine, fourLine)
               **************************************/
            `}
            customStyles={{ padding: 0 }}
          />
          <TableRequirefield
            body={[
              {
                name: 'backgroundColor',
                type: 'string',
                require: false,
              },
              {
                name: 'textColor',
                type: 'string',
                require: false,
              },
              {
                name: 'lineColor',
                type: 'string',
                require: false,
              },
              {
                name: 'oneLine',
                type: 'boolean',
                require: false,
              },
              {
                name: 'twoLine',
                type: 'boolean',
                require: false,
              },
              {
                name: 'fourLine',
                type: 'boolean',
                require: false,
              },
            ]}
          />
          <SectionLinkExample>
            <Link href="/button/button-hover-border">
              <LinkExample href="/button/button-hover-border">example preview</LinkExample>
            </Link>
            <LinkExample
              href={`${SOURCE_CODE_LINK}/src/button/ButtonHoverBorder.tsx`}
              target="_blank"
            >
              source code
            </LinkExample>
          </SectionLinkExample>
        </SectionCode>
      </WarpButtonComp>
      <Divider line="wave" />
    </MainLayout>
  );
};

export default ButtonPage;
