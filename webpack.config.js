const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const DtsBundleWebpackPlugin = require('bundle-declarations-webpack-plugin').default;

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'production',
  entry: {
    'bundle': './src/index.ts',
    'bundle.min': './src/index.ts'
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
    library: 'bTreePrinter',
    libraryExport: 'default',
    libraryTarget: 'umd',
    globalObject: 'this',
    environment: {
      arrowFunction: false
    }
  },
  resolve: {
    extensions: ['.ts', '.js'],
    extensionAlias: {
      ".js": [".js", ".ts"],
    }
  },
  module: {
    rules: [
      {
        test: /\.(t|j)s$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: 'last 2 versions',
                  }
                ]
              ]
            }
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: false,

            }
          }
        ]
      },
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js/,
        include: /\.min\.js/,
        terserOptions: {
          format: {
            comments: false
          }
        },
        extractComments: false,
      })
    ]
  },
  plugins: [
    new DtsBundleWebpackPlugin({
      entry: './src/index.ts',
      outFile: 'bundle.d.ts',
      compilationOptions: {
        preferredConfigPath: path.resolve(__dirname, 'tsconfig.json')
      }
    })
  ]
};