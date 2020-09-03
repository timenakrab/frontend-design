const withSass = require('@zeit/next-sass');

module.exports = withSass({
  compress: true,
  devIndicators: {
    autoPrerender: false,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.js|jsx|ts|tsx$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
        },
      });
    }
    return config;
  },
  env: {},
  serverRuntimeConfig: {},
  publicRuntimeConfig: {},
});
