const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './client/src/index.js',
  output: {
    path: path.join(__dirname, './client/dist'),
    filename: '[name].chunk.js'
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      '<atoms>': path.resolve(__dirname, 'client/src/components/UI/atoms'),
      '<molecules>': path.resolve(__dirname, 'client/src/components/UI/molecules'),
      '<organisms>': path.resolve(__dirname, 'client/src/components/UI/organisms'),
      '<styles>': path.resolve(__dirname, 'client/src/styles'),
      '<pages>': path.resolve(__dirname, 'client/src/components/pages'),
      '<helpers>': path.resolve(__dirname, 'client/src/helpers')
    }
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: './client/index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js?$|.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-transform-runtime',
              '@babel/plugin-transform-arrow-functions'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
