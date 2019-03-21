const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = function(env, argv) {
  return {
    devtool: 'cheap-module-eval-source-map',
    // devtool: 'cheap-module-source-map'
    entry: [
      './src/main.js',
      // 'webpack-hot-middleware/client?timeout=2000&overlay=false'
    ],
    output: {
      filename: '[name]_[hash:5].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    devServer: {
      contentBase: 'dist/',
      hot: true,
      hotOnly: true
    },
    module: {
      rules: [{
        test: /\.(jpe?g|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/',
            limit: 4048
          }
        }
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.scss$/,
        use: [
          'style-loader', {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }, {
        test: /\.(eot|ttf|svg|woff)$/,
        use: {
          loader: 'file-loader'
        }
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public/index.html')
      }),
      new CleanWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
  }
}