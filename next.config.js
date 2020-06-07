module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/,
      enforce: 'pre',
      exclude: /node_modules/,
      use: [
        {
          loader: 'eslint-loader',
          options: {
            emitWarning: dev,
          },
        },
      ],
    });

    return config;
  },
};