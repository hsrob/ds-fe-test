var path = require('path');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var express = require('express');

var isDevelopment = process.env.NODE_ENV !== 'production';
var app = new express();
var port = process.env.PORT || 3000;

if (isDevelopment) {
  var compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}
else {
  app.use('/static', express.static(path.join(__dirname, '/static')));
}
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
})
app.listen(port, '0.0.0.0', function (error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})