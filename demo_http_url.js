var http = require("http");
var url = require("url");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    //res.write(req.url); // the path
    var q = url.parse(req.url, true).query; // split query string
    //http://localhost:8080/?year=2017&month=July  as example we get2017 july when we run the app
    var txt = q.year + " " + q.month;
    res.end(txt);
  })
  .listen(8080);
