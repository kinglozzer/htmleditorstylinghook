const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const IS_PROD = (process.env.NODE_ENV === 'production');

const PATHS = {
  MODULES: path.resolve(__dirname, 'node_modules'),
  MODULE_JS_SRC: path.resolve(__dirname, 'client/src/js'),
  MODULE_JS_DIST: path.resolve(__dirname, 'client/dist/js')
};

module.exports = {
  mode: IS_PROD ? 'production' : 'development',
  entry: {
    plugin: `${PATHS.MODULE_JS_SRC}/plugin.js`
  },
  output: {
    filename: '[name].js',
    path: PATHS.MODULE_JS_DIST
  },
  resolve: {
    modules: [PATHS.MODULES, PATHS.MODULE_JS_SRC],
    extensions: [".js", ".jsx", ".scss", ".css"]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      })
    ]
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: [PATHS.MODULES],
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          comments: false
        }
      }
    }]
  },
  devtool: !IS_PROD && "source-map"
};
