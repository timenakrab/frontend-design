import { NextRouter } from 'next/router';
import React from 'react';

import MainLayout from '../src/MainLayout';

type HomePageProps = {
  router: NextRouter;
};

const HomePage = ({ router }: HomePageProps) => {
  return (
    <MainLayout pathname={router.pathname}>
      <p>Waiting For Update</p>
    </MainLayout>
  );
};

export default HomePage;
