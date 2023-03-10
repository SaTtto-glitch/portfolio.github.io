// モジュールをロードする　DOMの代わり
const http = require('http');


// サーバーを作る
var server = http.createServer(
  (request,response)=>{
    response.end('hello');
  }
);
// ポート番号:3000で受け付け開始
server.listen(port =3000);