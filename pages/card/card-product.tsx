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

const CardProductPage = () => {
  return (
    <Root>
      <ContainerFlex flexDirection="row">
        <CardProduct title="headphone" price={2990} />
        <CardProduct title="headphone" price={4000} color="#2196f3" />
        <CardProduct
          title="headphone"
          price={3500}
          satang={50}
          color="#e01d1d"
          link="https://www.mentagram.com/"
        />
      </ContainerFlex>
      <CodePreview
        language="tsx"
        codeString={`
        import CardProduct from '../src/card/CardProduct';
        ...
        <CardProduct title="headphone" price={2990} />
        <CardProduct title="headphone" price={4000} color="#2196f3" />
        <CardProduct
          title="headphone"
          price={3500}
          satang={50}
          color="#e01d1d"
          link="https://www.mentagram.com/"
        />
        ...
        `}
      />
    </Root>
  );
};

export default CardProductPage;
