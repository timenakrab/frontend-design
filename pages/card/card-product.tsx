/* ref: https://www.youtube.com/watch?v=yNBObeTWvio */
import React from 'react';
import styled from 'styled-components';

import CardProduct from '../../src/card/CardProduct';
import CodePreview from '../../src/CodePreview';
import ContainerFlex from '../../src/ContainerFlex';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  background-color: #09161d;
`;
const WarpCard = styled.div`
  margin: 8px;
`;

const CardProductPage = () => {
  return (
    <Root>
      <ContainerFlex flexDirection="row" backgroundColor="transparent">
        <WarpCard>
          <CardProduct title="headphone" price={2990} />
        </WarpCard>
        <WarpCard>
          <CardProduct title="headphone" price={4000} color="#2196f3" />
        </WarpCard>
        <WarpCard>
          <CardProduct
            title="headphone"
            price={3500}
            satang={50}
            color="#e01d1d"
            link="https://www.google.com/"
          />
        </WarpCard>
      </ContainerFlex>
      <CodePreview
        language="tsx"
        codeString={`
        import CardProduct from '../src/card/CardProduct';
        ...
        <CardProduct
          title="headphone"
          price={3500}
          satang={50}
          color="#e01d1d"
          link="https://www.google.com/"
        />
        ...
        `}
      />
    </Root>
  );
};

export default CardProductPage;
