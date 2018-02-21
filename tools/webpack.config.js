const path = require('path')
const webpack = require('webpack')
const AssetsPlugin = require('assets-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const pkg = require('../package.json')

const isDebug =
  global.DEBUG === false ? false : !process.argv.includes('--release')
const isVerbose =
  process.argv.includes('--verbose') || process.argv.includes('-v')
const useHMR = !!global.HMR // Hot Module Replacement (HMR)
const babelConfig = Object.assign({}, pkg.babel, {
  babelrc: false,
  cacheDirectory: useHMR,
  presets: pkg.babel.presets.map(
    x => (x === 'env' ? ['env', { modules: false }] : x)
  )
})

const cssConfig = debug => {
  if (debug === true) {
    return [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: isDebug,
          importLoaders: 1,
          modules: true,
          localIdentName: isDebug
            ? '[local]' // '[name]__[local]--[hash:base64:5]'
            : '[hash:base64:5]',
          // getLocalIdent: (context, localIdentName, localName, options) =>
          //   localName,
          // CSS Nano http://cssnano.co/options/
          // minimize: !isDebug
          minimize: false // For debugging
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          config: { path: './tools/postcss.config.js' }
        }
      }
    ]
  }

  return ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: isDebug,
          importLoaders: 1,
          modules: true,
          localIdentName: isDebug
            ? '[local]' // '[name]__[local]--[hash:base64:5]'
            : '[hash:base64:5]',
          // getLocalIdent: (context, localIdentName, localName, options) =>
          //   localName,
          // CSS Nano http://cssnano.co/options/
          // minimize: !isDebug
          minimize: false // For debugging
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          config: { path: './tools/postcss.config.js' }
        }
      }
    ]
  })
}

// Webpack configuration (main.js => public/dist/main.{hash}.js)
// http://webpack.github.io/docs/configuration.html
const config = {
  // The base directory for resolving the entry option
  context: path.resolve(__dirname, '../src'),

  // The entry point for the bundle
  entry: [
    /* The main entry point of your JavaScript application */
    './main.js'
  ],

  // Options affecting the output of the compilation
  output: {
    path: path.resolve(__dirname, '../public/dist'),
    publicPath: isDebug
      ? `http://localhost:${process.env.PORT || 2016}/dist/`
      : '/dist/',
    filename: isDebug ? '[name].js?[hash]' : '[name].[hash].js',
    chunkFilename: isDebug ? '[id].js?[chunkhash]' : '[id].[chunkhash].js',
    sourcePrefix: '  '
  },

  // Developer tool to enhance debugging, source maps
  // http://webpack.github.io/docs/configuration.html#devtool
  devtool: isDebug ? 'source-map' : false,

  // What information should be printed to the console
  stats: {
    colors: true,
    reasons: isDebug,
    hash: isVerbose,
    version: isVerbose,
    timings: true,
    chunks: isVerbose,
    chunkModules: isVerbose,
    cached: isVerbose,
    cachedAssets: isVerbose
  },

  // The list of plugins for Webpack compiler
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isDebug ? '"development"' : '"production"',
      __DEV__: isDebug
    }),
    // Emit a JSON file with assets paths
    // https://github.com/sporto/assets-webpack-plugin#options
    new AssetsPlugin({
      path: path.resolve(__dirname, '../public/dist'),
      filename: 'assets.json',
      prettyPrint: true
    }),
    new webpack.LoaderOptionsPlugin({
      debug: isDebug,
      minimize: !isDebug
    })
  ],

  // Options affecting the normal modules
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, '../src'),
          path.resolve(__dirname, '../components')
        ],
        loader: 'babel-loader',
        options: babelConfig
      },
      {
        test: /\.css/,
        use: cssConfig(isDebug)
      },
      {
        test: /\.json$/,
        exclude: [path.resolve(__dirname, '../src/routes.json')],
        loader: 'json-loader'
      },
      {
        test: /\.json$/,
        include: [path.resolve(__dirname, '../src/routes.json')],
        use: [
          {
            loader: 'babel-loader',
            options: babelConfig
          },
          {
            loader: path.resolve(__dirname, './routes-loader.js')
          }
        ]
      },
      {
        test: /\.md$/,
        loader: path.resolve(__dirname, './markdown-loader.js')
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.(eot|ttf|wav|mp3|ttf|otf|eot|woff2?)$/,
        loader: 'file-loader'
      }
      // {
      //   test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //         outputPath: 'public/fonts/', // where the fonts will go
      //         publicPath: '../' // override the default path
      //       }
      //     }
      //   ]
      // }
    ]
  }
}

// Optimize the bundle in release (production) mode
if (!isDebug) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: isVerbose
      }
    })
  )
  config.plugins.push(new webpack.optimize.AggressiveMergingPlugin())
  config.plugins.push(new ExtractTextPlugin('styles.css'))
}

// Hot Module Replacement (HMR) + React Hot Reload
if (isDebug && useHMR) {
  babelConfig.plugins.unshift('react-hot-loader/babel')
  config.entry.unshift(
    'react-hot-loader/patch',
    'webpack-hot-middleware/client'
  )
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
  config.plugins.push(new webpack.NoEmitOnErrorsPlugin())
}

module.exports = config
