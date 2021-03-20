const HtmlWebpackPlugin          = require('html-webpack-plugin');
const MiniCssExtractPlugin       = require('mini-css-extract-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

const env = process.env.NODE_ENV;

module.exports = {
  mode: process.env.NODE_ENV,

  entry: './src/js/main.js',

  output: {
    publicPath: env === 'development' ? '/':'',
    filename: env === 'development' ? 'js/bundle.js' : 'js/bundle.[contenthash].min.js',
    chunkFilename: env === 'development' ? 'js/[name].js' : 'js/[name].[contenthash].min.js'
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendor'
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
        use: {
          loader: 'babel-loader'
        }
      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
              loader: 'css-loader',
              options: {
                  sourceMap: true
              }
          },
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/fonts',
            outputPath: 'fonts',
            emitFile: true,
            name: '[name].[ext]',
          },
        },
      },
      {
        test: /\.(gif|ico|jpe?g|png|svg|webp)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/img',
            outputPath: 'img',
            emitFile: true,
            name: '[name].[ext]',
          },
        },
      },
    ],
  },

  plugins: [
    new WebpackBuildNotifierPlugin(),

    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].min.css'
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/html/index.html'
    }),
  ],
}
