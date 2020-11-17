import Link from 'next/link';
import { NextRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

import CardEffect from '../../src/card/CardEffect';
import CardProduct from '../../src/card/CardProduct';
import CodePreview from '../../src/CodePreview';
import Divider from '../../src/Divider';
import MainLayout from '../../src/MainLayout';
import TableRequirefield from '../../src/TableRequirefield';
import Text from '../../src/Text';

const WarpCardProduct = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 16px 0px;
  align-items: flex-start;
`;
const SectionCardProduct = styled.div`
  width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const SectionCode = styled.div`
  flex-grow: 1;
  padding: 0px 8px;
  @media (max-width: 768px) {
    padding: 8px 0px;
  }
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
const SOURCE_CODE_LINK = 'https://raw.githubusercontent.com/timenakrab/frontend-design/master';

type CardPageProps = {
  router: NextRouter;
};

const CardPage = ({ router }: CardPageProps) => {
  return (
    <MainLayout pathname={router.pathname}>
      <Text h1 customStyles={{ textTransform: 'uppercase', letterSpacing: 1 }}>
        card components
      </Text>
      <Divider />
      <Text h2 customStyles={{ textTransform: 'uppercase', letterSpacing: 1 }}>
        card product (hover)
      </Text>
      <WarpCardProduct>
        <SectionCardProduct>
          <CardProduct
            title="headphone"
            price={3500}
            satang={50}
            color="#e01d1d"
            link="https://www.google.com/"
          />
        </SectionCardProduct>
        <SectionCode>
          <CodePreview
            language="tsx"
            codeString={`
              <CardProduct
                title="headphone"
                price={3500}
                satang={50}
                color="#e01d1d"
                link="https://www.google.com/"
              />
            `}
            customStyles={{ padding: 0 }}
          />
          <TableRequirefield
            body={[
              {
                name: 'title',
                type: 'string',
                require: true,
              },
              {
                name: 'price',
                type: 'number',
                require: true,
              },
              {
                name: 'satang',
                type: 'number',
                require: false,
              },
              {
                name: 'color',
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
            <Link href="/card/card-product">
              <LinkExample href="/card/card-product">example preview</LinkExample>
            </Link>
            <LinkExample href={`${SOURCE_CODE_LINK}/src/card/CardProduct.tsx`} target="_blank">
              source code
            </LinkExample>
          </SectionLinkExample>
        </SectionCode>
      </WarpCardProduct>
      <Divider />
      <Text h2 customStyles={{ textTransform: 'uppercase', letterSpacing: 1 }}>
        card (border hover effects)
      </Text>
      <WarpCardProduct>
        <SectionCardProduct>
          <CardEffect
            no="01"
            title="Post Title"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            link="/"
          />
        </SectionCardProduct>
        <SectionCode>
          <CodePreview
            language="tsx"
            codeString={`
              <CardEffect
                no="01"
                title="Post Title"
                desc="Description..."
                link="/"
              />
            `}
            customStyles={{ padding: 0 }}
          />
          <TableRequirefield
            body={[
              {
                name: 'no',
                type: 'string',
                require: true,
              },
              {
                name: 'title',
                type: 'string',
                require: true,
              },
              {
                name: 'desc',
                type: 'string',
                require: true,
              },
              {
                name: 'link',
                type: 'string',
                require: false,
              },
            ]}
          />
          <SectionLinkExample>
            <Link href="/card/card-hover-effect">
              <LinkExample href="/card/card-hover-effect">example preview</LinkExample>
            </Link>
            <LinkExample href={`${SOURCE_CODE_LINK}/src/card/CardEffect.tsx`} target="_blank">
              source code
            </LinkExample>
          </SectionLinkExample>
        </SectionCode>
      </WarpCardProduct>
    </MainLayout>
  );
};

export default CardPage;
