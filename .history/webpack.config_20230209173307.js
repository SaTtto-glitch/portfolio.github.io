const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./server",
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: "/node_modules",
            use: ['babel-loader'],
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
  target: "node",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx"],
    modules: ["node_modules"],
    fallback: {
      fs: false,
    },
  },
};
