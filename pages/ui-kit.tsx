import { NextRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

import MainLayout from '../src/MainLayout';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffdab0;
  background-repeat: no-repeat;
  background: url('/img/bg.webp') no-repeat 50% fixed;
  background-size: cover;
`;

type UIKitProps = {
  router: NextRouter;
};

const UIKitPage = ({ router }: UIKitProps) => {
  return (
    <MainLayout pathname={router.pathname}>
      <Background />
    </MainLayout>
  );
};

export default UIKitPage;
