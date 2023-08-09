export default {
  outDir: "dist",
  title: "react",
  publicPath: "/",
  devServer: {
    port: 8899,
    proxy: {
      "/proxy": {
        target: "",
        rewrite: { "^/proxy": "" },
        changeOrigin: true, // 控制服务器接收到的请求头中host字段的值
        secure: false,
      },
    },
  },
};
