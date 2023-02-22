require("../env/env.js");
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const dirRoot = path.resolve(__dirname, "../");

const baseConfig = {
  context: path.resolve(dirRoot, "./src"),
  entry: "./main.tsx",
  output: {
    path: path.resolve(dirRoot, "./dist"), //必须是绝对路径
    filename: "[name]_[contenthash].js",
    chunkFilename: "js/[name]_[contenthash].js",
    clean: true,
    publicPath: "/",
  },
  devtool: false,
  // loader 规则
  module: {
    rules: [
      {
        test: /\.(c|le)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.(t|j)sx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: "> 0.25%, not dead",
                useBuiltIns: "usage",
                corejs: "3",
              },
            ],
            [
              "@babel/preset-react",
              {
                runtime: "automatic",
              },
            ],
            ["@babel/preset-typescript", { isTSX: true, allExtensions: true }],
          ],
          plugins: ["@babel/plugin-transform-runtime"],
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  // 模块解析
  resolve: {
    alias: {
      "@src": path.resolve(dirRoot, "./src"),
    },
    extensions: [".ts", ".jsx", ".tsx", "..."], // 自动不全文件后缀
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: "react",
      template: path.resolve(dirRoot, "./public/index.html"),
      filename: "index.html",
    }),
    // css 分离
    new MiniCssExtractPlugin({
      filename: "styles/[name].css",
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    const devServer = {
      historyApiFallback: true,
      compress: true,
      client: {
        logging: "error",
        progress: true,
        overlay: true,
      },
      // proxy: {
      //   "/proxy": {
      //     target: "https://xxxxx.xxxx",
      //     pathRewrite: { "^/proxy": "" },
      //     changeOrigin: true, // 控制服务器接收到的请求头中host字段的值
      //     secure: false,
      //   },
      // },
      open: true,
      port: 2000,
    };
    baseConfig.cache = { type: "filesystem" };
    baseConfig.devServer = devServer;
    baseConfig.plugins.push(new webpack.SourceMapDevToolPlugin({}));
  }

  if (argv.mode === "production") {
    const optimization = {
      usedExports: true,
      minimize: true,
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
            filename: "[contenthash].vendor.js",
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          react: {
            name: "ReactAbout",
            test: /.jsx/,
            priority: 1,
          },
        },
      },
    };
    baseConfig.optimization = optimization;
    baseConfig.plugins.push(
      new BundleAnalyzerPlugin({ analyzerMode: "static" })
    );
  }

  console.log(`运行环境 ${argv.mode}`);

  return baseConfig;
};
