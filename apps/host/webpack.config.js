const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const deps = require("./package.json").dependencies;

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
    publicPath: "http://localhost:3000/",
    crossOriginLoading: "anonymous",
  },

  // -----------------------------
  // Resolve imports automatically
  // -----------------------------
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      react: path.resolve(__dirname, "node_modules/react"),
      "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
      "@mfe/types": path.resolve(__dirname, "../../packages/types"),
    },
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
  filename: "remoteEntry.js",

  remotes: {
    auth: "auth@http://localhost:3001/remoteEntry.js",
    profile: "profile@http://localhost:3002/remoteEntry.js",
  },

  exposes: {
    "./store": "./src/store",
  },

  shared: {
    react: {
      singleton: true,
      eager: true,
    },

    "react-dom": {
      singleton: true,
      eager: true,
    },

    "react-router-dom": {
      singleton: true,
      eager: true,
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
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cross-Origin-Resource-Policy": "cross-origin",
    },
    static: {
      directory: path.resolve(__dirname, "public"),
    },
  },

  // -----------------------------
  // Source Maps
  // -----------------------------
  devtool: "source-map",
};