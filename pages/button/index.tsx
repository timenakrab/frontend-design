import { NextRouter } from 'next/router';
import React from 'react';

import MainLayout from '../../src/MainLayout';

type ButtonPageProps = {
  router: NextRouter;
};

const ButtonPage = ({ router }: ButtonPageProps) => {
  return (
    <MainLayout pathname={router.pathname}>
      <p>Waiting For Update</p>
    </MainLayout>
  );
};

export default ButtonPage;
