import { NextRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

import CardEffect from '../../src/card/CardEffect';
import CardProduct from '../../src/card/CardProduct';
import CardSquareInfo from '../../src/card/CardSquareInfo';
import {
  CardHoverEffectLink,
  CardHoverEffectPreview,
  CardHoverEffectRequire,
  CardHoverEffectSource,
} from '../../src/codePreview/CardHoverEffectPreview';
import {
  CardProductLink,
  CardProductPreview,
  CardProductRequire,
  CardProductSource,
} from '../../src/codePreview/CardProductPreview';
import {
  CardSquareInfoLink,
  CardSquareInfoPreview,
  CardSquareInfoRequire,
  CardSquareInfoSource,
} from '../../src/codePreview/CardSquareInfoPreview';
import Divider from '../../src/Divider';
import MainLayout from '../../src/MainLayout';
import Text from '../../src/Text';
import WarpCompPreview from '../../src/WarpCompPreview';

const SectionCardProduct = styled.div`
  width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

type CardPageProps = {
  router: NextRouter;
};

const CardPage = ({ router }: CardPageProps) => {
  return (
    <MainLayout
      pathname={router.pathname}
      customStyle={{ padding: '0px 16px' }}
      seoData={{
        title: 'Card Components',
        desc: 'design cards',
        url: '/card',
        keywords: 'time-pai-ruey,design,card,card components',
      }}
    >
      <Text h1 customStyles={{ textTransform: 'uppercase', letterSpacing: 1 }}>
        card components
      </Text>
      <Divider line="solid" />
      <WarpCompPreview
        title="card product (hover)"
        exampleLink={CardProductLink}
        sourceCodeLink={CardProductSource}
        flexDirection="row"
        codeLanguage="tsx"
        codePreview={CardProductPreview}
        requireData={CardProductRequire}
      >
        <SectionCardProduct>
          <CardProduct
            title="headphone"
            price={3500}
            satang={50}
            color="#e01d1d"
            link="https://www.google.com/"
          />
        </SectionCardProduct>
      </WarpCompPreview>
      <WarpCompPreview
        title="card (border hover effects)"
        exampleLink={CardHoverEffectLink}
        sourceCodeLink={CardHoverEffectSource}
        flexDirection="row"
        codeLanguage="tsx"
        codePreview={CardHoverEffectPreview}
        requireData={CardHoverEffectRequire}
      >
        <SectionCardProduct>
          <CardEffect
            no="01"
            title="Post Title"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            link="/"
          />
        </SectionCardProduct>
      </WarpCompPreview>
      <WarpCompPreview
        title="square card (hover effects)"
        exampleLink={CardSquareInfoLink}
        sourceCodeLink={CardSquareInfoSource}
        flexDirection="row"
        codeLanguage="tsx"
        codePreview={CardSquareInfoPreview}
        requireData={CardSquareInfoRequire}
      >
        <SectionCardProduct>
          <CardSquareInfo
            icon="fab fa-apple"
            cardSize={300}
            cardColor="#2e3033"
            iconColor="#f3f3f3"
            cardInfoColor="#5eb0e5"
            iconInfoColor="#f3f3f3"
            textColor="#f3f3f3"
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </SectionCardProduct>
      </WarpCompPreview>
    </MainLayout>
  );
};

export default CardPage;
