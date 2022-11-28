var express = require('express');
var app = express();



app.get('/', (req, res) => {
  res.send('huangkucan Hello World!')
})


app.get('/login', (req, res) => {
  console.log('hkc', req.query);
  const name = req.query?.name;
  res.send(name + ' login success');
})

app.get('/redirect', (req, res) => {
  console.log('hkc', req);
  res.redirect('http://www.baidu.com');
})

app.listen(8080, function () {
  console.log('服务器启动成功');
});