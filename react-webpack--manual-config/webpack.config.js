const path = require('path')

// plugin que simplifica a criação de arquivos HTML
const HtmlWebpackPlugin = require('html-webpack-plugin')

// plugin que limpa a pasta dist antes de cada build
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const webpack = require('webpack')

module.exports = {

  // arquivos .js no navegador em leitura facilitada
  // ajuda na depuração do código em desenvolvimento
  devtool: 'source-map',

  entry: {
    main: path.join(__dirname, 'src', 'index')
  },

  output: {
    path: path.join(__dirname, 'dist'),

    // [name] será substítui por 'main'
    // que foi definido no entry: (acima)
    filename: '[name].bundle.js'
  },

  // mode: 'production',
  mode: 'development',
  devServer: {
    open: true,
    compress: true,
    port: 8080,
    historyApiFallback: {
      index: 'index.html'
    },
    static: {
      directory: path.join(__dirname, 'dist')
    }
  },

  module: {
    rules: [

      // Javascript
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [

    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',

      // template file
      template: path.join(__dirname, 'src', 'html', 'template.html'),

      // output file
      filename: 'index.html'
    }),

    // Atualize apenas o que mudou no hot reload
    new webpack.HotModuleReplacementPlugin(),

    new CleanWebpackPlugin()

  ]
}
