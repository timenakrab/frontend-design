import getConfig from 'next/config';
import Head from 'next/head';
import React from 'react';

import { seoDesc, seoKeywords, seoPage, seoTitle, websiteLogo } from './constant/configWebsite';

const { publicRuntimeConfig } = getConfig();

interface IHeaderPage {
  title?: string;
  desc?: string;
  url?: string;
  keywords?: string;
}

const HeaderPage: React.FC<IHeaderPage> = ({ title, desc, url, keywords }: IHeaderPage) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <link rel="canonical" href={publicRuntimeConfig.BASE_URL + url} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>{title} | Time-Pai-Ruey</title>
      <link rel="icon" href={websiteLogo} />
      <link rel="manifest" href={`${publicRuntimeConfig.BASE_URL}/manifest.json`} />
      <meta name="description" content={desc} />
      <meta name="keywords" content={keywords || title} />
      <link rel="apple-touch-icon" sizes="180x180" href={websiteLogo} />

      <meta property="fb:app_id" content="1876421945732975" />
      <meta property="og:locale" content="th_TH" />
      <meta property="og:locale:alternate" content="en_EN" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${title} | Time-Pai-Ruey`} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={publicRuntimeConfig.BASE_URL + url} />
      <meta property="og:site_name" content="Time Pai Ruey" />
      <meta property="og:image" content={websiteLogo} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />
    </Head>
  );
};

HeaderPage.defaultProps = {
  title: seoTitle,
  desc: seoDesc,
  url: seoPage,
  keywords: seoKeywords,
};

export default HeaderPage;
