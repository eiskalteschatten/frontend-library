const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: '@alexseifert/react-components',
    libraryTarget: 'umd',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'src/static', to: 'static' },
        { from: 'src/styles', to: 'styles' },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[hash:base64:5]',
              },
            },
          },
          { loader: 'sass-loader' },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './src/styles/_mixins.scss',
                './src/styles/_variables.scss',
              ],
            },
          },
        ],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src/'),
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  externals: [nodeExternals()],
};
