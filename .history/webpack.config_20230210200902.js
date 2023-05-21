const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./server/index",
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: "/node_modules",
            use: ['babel-loader'],
        },
        { 
            test: /\.(js|jsx|ts|tsx)$/, 
            exclude: /node_modules/, 
            use: ['babel-loader'] 
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
    extensions: ['*', '.js', '.jsx', '.json', 'css', '.ts', '.tsx'],
    modules: ["node_modules"],
    fallback: {
      fs: false,
    },
  },
};
