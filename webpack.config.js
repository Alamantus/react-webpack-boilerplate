const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');

 module.exports = {
    entry: APP_DIR + '/index.jsx'
  , output: {
      path: BUILD_DIR
    , filename: 'site.js'
    }
  , module: {
      loaders: [
        {
          test: /\.html?$/
        , exclude: /node_modules/
        , loaders: [
            'file?name=[name].html'
          , 'html-minify'
          ]
        }
      , {
          test: /\.scss$/
        , exclude: /node_modules/
        , loaders: [
            'style'
          , 'css'
          , 'sass'
          ]
        }
      , {
          test: /\.jsx?$/
        , exclude: /node_modules/
        , loader: 'babel'
        , query: {
            presets:  [
              'react'
            , 'es2015'
            ]
          }
        }
      , {
        // Loads jpg and png images <=25kb into the bundle, otherwise, moves them to images dir
          test: /\.(jpg|png)$/
        , exclude: /node_modules/
        , loaders: [
            'url?limit=25000?name=images/[name].[ext]?[hash]'
          , 'img?progressive=true&optimizationLevel=9'
          ]
        }
      ]
    }
  , resolve: {
      extensions: [
        ''
      , '.js'
      , '.jsx'
      ]
    }
  // , plugins: [
  //   // When you're ready to publish, check this article out.
  //   // http://dev.topheman.com/make-your-react-production-minified-version-with-webpack/
  //     new webpack.optimize.UglifyJsPlugin({
  //       compress: {
  //         warnings: false
  //       }
  //     , output: {
  //         comments: false
  //       }
  //     })
  //   ]
  , sassLoader: {
      file: APP_DIR + '/sass/styles.scss'
    , outputStyle: 'compressed'
    }
 };
