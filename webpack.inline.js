const path = require('path')
const webpack = require('webpack')

module.exports = {
  // devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/index.js'
  ],
  devServer: {
    hot: true,
    inline: true,
    port: 3011
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3011/static/',
    chunkFilename: '[name].[chunkhash:5].chunk.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"inline"'
    })
  ],
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['react-hot-loader', 'babel-loader'], exclude: /node_modules/, include: __dirname},
      {test: /\.less$/, loaders: ['style-loader', 'css-loader?sourceMap', 'less-loader']},
      {test: /\.scss$/, loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader']},
      {test: /\.(jpg|png|svg)$/, loader: "url-loader?limit=8192"},
      {test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/, loader: "file-loader"}
    ]
  }
}
