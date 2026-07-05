const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;


module.exports = {
  // -----------------------------
  // Build Mode
  // -----------------------------
  mode: "development",

  // -----------------------------
  // Starting point of the application
  // -----------------------------
  entry: "./src/index.tsx",

  // -----------------------------
  // Output configuration
  // -----------------------------
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
    publicPath: "auto",
  },

  // -----------------------------
  // Resolve imports automatically
  // -----------------------------
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  // -----------------------------
  // Module Rules (Loaders)
  // -----------------------------
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "typescript",
                tsx: true,
              },
              transform: {
                react: {
                  runtime: "automatic",
                },
              },
              target: "es2022",
            },
          },
        },
      },
    ],
  },

  // -----------------------------
  // Plugins
  // -----------------------------
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),

new ModuleFederationPlugin({
  name: "host",

  remotes: {
    auth: "auth@http://localhost:3001/remoteEntry.js",
  },

  shared: {
    react: {
      singleton: true,
    },

    "react-dom": {
      singleton: true,
    },
  },
}),
  ],

  // -----------------------------
  // Development Server
  // -----------------------------
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "public"),
    },
  },

  // -----------------------------
  // Source Maps
  // -----------------------------
  devtool: "source-map",
};