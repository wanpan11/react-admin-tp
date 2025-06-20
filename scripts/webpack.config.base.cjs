require("../env/env.cjs"); // 导入对应环境变量
const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const pak = require("../package.json");

const rootDir = path.resolve(__dirname, "../");
const dynamicConf = require(`./${process.env.NODE_ENV}.config.cjs`); //  加载对应环境打包配置

const publicVars = Object.keys(process.env)
  .filter(key => key.startsWith("PUBLIC_"))
  .reduce((env, key) => {
    env[key] = process.env[key];
    return env;
  }, {});

module.exports = {
  context: path.resolve(rootDir, "./src"),
  entry: dynamicConf.entry,
  output: {
    clean: true,
    path: path.resolve(rootDir, dynamicConf.outDir),
    filename: "[name]_[contenthash].js",
    chunkFilename: "js/[name]_[contenthash].js",
    publicPath: dynamicConf.publicPath,
    assetModuleFilename: "images/[hash][ext][query]",
  },
  devtool: false,
  // loader 规则
  module: {
    rules: [
      {
        test: /\.(c|le)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: dynamicConf.cssPublicPath ? dynamicConf.cssPublicPath : dynamicConf.publicPath,
            },
          },
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(t|j)sx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
      },
      {
        test: /\.(jpe?g|png|svg|gif)/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 限制于 8kb
          },
        },
      },
    ],
  },
  // 模块解析
  resolve: {
    alias: {
      "&src": path.resolve(rootDir, "./src"),
    },
    extensions: [".ts", ".jsx", ".tsx", "..."], // 自动补全文件后缀
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: dynamicConf.title,
      template: path.resolve(rootDir, "./template/index.html"),
      favicon: path.resolve(rootDir, "./template/favicon.svg"),
      meta: { version: `${pak.version}_${new Date().getTime()}` },
    }),
    // css 分离
    new MiniCssExtractPlugin({
      filename: "styles/[name].css",
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(publicVars),
    }),
  ],
  devServer: {
    open: true,
    port: dynamicConf?.devServer?.port,
    proxy: dynamicConf?.devServer?.proxy,
    static: ["template"],
    compress: true,
    historyApiFallback: true,
    client: {
      logging: "error",
      progress: true,
      overlay: true,
    },
    hot: true
  },
};
