const withSass = require('@zeit/next-sass');

module.exports = withSass({
  compress: true,
  devIndicators: {
    autoPrerender: false,
  },
  crossOrigin: 'anonymous',
  webpack: (config, { dev }) => {
    const newConfig = config;
    newConfig.resolve.alias = {
      ...newConfig.resolve.alias,
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    };
    if (dev) {
      newConfig.module.rules.push({
        test: /\.js|jsx|ts|tsx$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
        },
      });
    }
    return newConfig;
  },
  env: {},
  serverRuntimeConfig: {},
  publicRuntimeConfig: {},
});
