import { NextRouter } from 'next/router';
import React from 'react';

import MainLayout from '../../src/MainLayout';

type TogglePageProps = {
  router: NextRouter;
};

const TogglePage = ({ router }: TogglePageProps) => {
  return (
    <MainLayout pathname={router.pathname}>
      <p>Waiting For Update</p>
    </MainLayout>
  );
};

export default TogglePage;
