const path = require("path");
const fs = require("fs");

module.exports = {
  mode: "development",
  entry: {
    bundle: './src/index.ts'
  },,
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "ts-loader",
          },
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "tsconfig.json"),
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 9000,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json",".jsx"],
  },
  target: "node",
  resolve: {
    fallback: {
      fs: false,
    },
  },
};
