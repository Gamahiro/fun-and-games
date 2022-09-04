const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  watch: true,
  entry: {
    index: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
        title:'game',
        filename: 'dist/index.html',
        template: 'src/index.html',
      favicon: "src/assets/G-Logo.jpg",

    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      { 
        test: /\.html$/, loader: 'html'
    }
    ],
  }, 
  
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};