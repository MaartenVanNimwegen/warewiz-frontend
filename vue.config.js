const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://localhost:7022",
        changeOrigin: true,
      },
    },
  },
};
