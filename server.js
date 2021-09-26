const express = require("express");
const app = express();
const webpack = require("webpack");
const webpackDevMiddleWare = require("webpack-dev-middleware");
const webpackConfig = require("./webpack.dev");
const WebpackDevMiddleware = require("webpack-dev-middleware");
const compiler = webpack(webpackConfig);

app.use(
  WebpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
  })
);

app.listen(3000, () => {
  console.log("App listening at port 3000...");
});
