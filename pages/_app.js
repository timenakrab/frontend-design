/* eslint-disable react/jsx-props-no-spreading */
import App from 'next/app';
import Head from 'next/head';
import { withRouter } from 'next/router';
import React from 'react';

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
        <Component {...pageProps} router={router} />
      </>
    );
  }
}

export default withRouter(MyApp);
