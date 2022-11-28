const http = require('http');
const server = http.createServer();
server.on('request', function (req, res) {
  console.log('收到网络请求');
  res.end('huangkucnan');
});
server.listen(8080, function () {
  console.log('服务器启动成功');
});