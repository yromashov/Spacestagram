const webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.KEY': JSON.stringify(process.env.KEY),
    }),
  ],
  mode: 'development',
  entry: ['./client/index.js'],
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
};
