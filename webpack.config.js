const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const bundlePath = path.resolve(__dirname, "dist/");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[name].[ext]',
          outputPath: 'assets'
        }
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
        loader: 'url-loader?limit=100000' 
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 8080,
    publicPath: "http://localhost:8080/dist",
    hot: true,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    publicPath: bundlePath
  }
};