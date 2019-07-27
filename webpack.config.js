const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HappyPack = require('happypack')
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: /.html$/,
        use: 'html-loader',
        exclude: /node_modules/
      },
      {
        test: /.vue$/,
        loader: 'happypack/loader?id=vue'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HappyPack({
      id: 'vue',
      loaders: ['vue-loader']
    })
  ],
  devServer: {
    publicPath: '/dist'
  }
}