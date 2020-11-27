import React from 'react';
import styled from 'styled-components';

import CardSquareInfo from '../../src/card/CardSquareInfo';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #f0f0f0;
`;
const WarpCard = styled.div`
  margin: 8px;
`;

const CardSquareInfoPage = () => {
  return (
    <Root>
      <WarpCard>
        <CardSquareInfo
          icon="fab fa-apple"
          cardSize={260}
          cardColor="#2e3033"
          iconColor="#f3f3f3"
          cardInfoColor="#5eb0e5"
          iconInfoColor="#f3f3f3"
          textColor="#f3f3f3"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </WarpCard>
      <WarpCard>
        <CardSquareInfo
          icon="fab fa-android"
          cardSize={240}
          cardColor="#3ddc84"
          iconColor="#ffffff"
          cardInfoColor="#ffffff"
          iconInfoColor="#3ddc84"
          textColor="#689f38"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </WarpCard>
      <WarpCard>
        <CardSquareInfo
          icon="fab fa-windows"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </WarpCard>
    </Root>
  );
};

export default CardSquareInfoPage;
