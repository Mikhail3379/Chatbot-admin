const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/app",
    createProxyMiddleware({
      target: "http://localhost:9000",
      changeOrigin: true,
      secure: false,
      logLevel: "info",
      timeout: 3000,
    })
  );
};
