/* ref: https://www.youtube.com/watch?v=yNBObeTWvio */
import React from 'react';
import styled from 'styled-components';

import CardProduct from '../src/card/CardProduct';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  background-color: #09161d;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const CardProductPage = () => {
  return (
    <Root>
      <Container>
        <CardProduct title="headphone" price={2990} />
        <CardProduct title="headphone" price={4000} color="#2196f3" />
        <CardProduct
          title="headphone"
          price={3500}
          satang={50}
          color="#e01d1d"
          link="https://www.mentagram.com/"
        />
      </Container>
    </Root>
  );
};

export default CardProductPage;
