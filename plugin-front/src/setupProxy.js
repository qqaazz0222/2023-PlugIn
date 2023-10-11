const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/smsapi', /*endpoint*/{
            target: 'https://api.bulksmsonline.co',
            changeOrigin: true,
        })
    );
};