const withSass = require('@zeit/next-sass');
const { websiteUrl } = require('./src/constant/configWebsite');

module.exports = withSass({
  compress: true,
  devIndicators: {
    autoPrerender: false,
  },
  crossOrigin: 'anonymous',
  webpack: (config, { dev }) => {
    const newConfig = config;
    if (dev) {
      newConfig.module.rules.push({
        test: /\.js|jsx|ts|tsx$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
        },
      });
    } else {
      newConfig.resolve.alias = {
        ...newConfig.resolve.alias,
        react: 'preact/compat',
        'react-dom': 'preact/compat',
      };
    }
    return newConfig;
  },
  env: {},
  serverRuntimeConfig: {
    BASE_URL: websiteUrl,
  },
  publicRuntimeConfig: {
    BASE_URL: websiteUrl,
  },
});
