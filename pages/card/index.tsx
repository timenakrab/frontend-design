import { NextRouter } from 'next/router';
import React from 'react';

import MainLayout from '../../src/MainLayout';

type CardPageProps = {
  router: NextRouter;
};

const CardPage = ({ router }: CardPageProps) => {
  return (
    <MainLayout pathname={router.pathname}>
      <p>Waiting For Update</p>
    </MainLayout>
  );
};

export default CardPage;
