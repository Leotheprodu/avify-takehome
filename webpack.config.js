/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const host = "localhost";
const port = 8080;

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "src"),
  target: "web",
  entry: {
    app: ["./index.tsx"],
  },
  output: {
    filename: "[name]-[contenthash:6].bundle.js",
    path: path.join(__dirname, "./build/"),
    publicPath: "",
  },
  resolve: {
    mainFields: ["browser", "module", "main"],
    extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.([jt])s(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: "file-loader?name=img/[name]-[contenthash:6].[ext]",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "styles.css", to: "styles.css" }],
    }),
  ],
  devServer: {
    port,
    host,
    static: path.join(__dirname, "src"),
    hot: true,
    historyApiFallback: true,
  },
};
