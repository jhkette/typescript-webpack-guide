const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.ts",
   // this allows us to view code as regular code on the console https://webpack.js.org/configuration/devtool/
  devtool: "inline-source-map",
  // create a server using webpack-dev-server
  devServer: {
    static: {
      directory: path.join(__dirname, "./"),
    },
  },
  module: {
    rules: [
      {
        // regex to find files
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
 
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
     // call generated file bundle
     filename: "bundle.js",
     // send bundle to dirname,dist
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist",
  },
};
