const http=require('http');

//创建http server
var server = http.createServer(function(req,res){
  //console.log('http connected' + req + 'res:' +res);
  //输出东西到页面上
  res.write('result is showing');

  //
  switch (req.url) {
    case '/1.html':
      res.write('1111');
      break;
    case '/2.html':
      res.write('2222');
      break;
    default:
      res.write('default');
      break;

  }
  res.end();
});

//端口-数字
server.listen(8080);
