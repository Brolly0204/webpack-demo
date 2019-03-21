const express = require('express')
const webpack = require('webpack')
const argv = require('yargs').argv
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config.js')()


argv.mode && (config.mode = argv.mode)

const compiler = webpack(config)

const app = express()

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

app.listen(3000, () => {
  console.log('server is running');
})