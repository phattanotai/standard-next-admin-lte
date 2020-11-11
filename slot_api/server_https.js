var express = require("express");
var https = require("https");
var fs = require('fs');
var cors = require("cors");
const bodyParser = require("body-parser");
const env = require('./env');
var fs = require('fs');
const {mongoConfig,expressConfig,onError} = require('./config/config');
var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//var port = env.port;
var port_https = env.port_https;

const sl_route = require('./routes');
const ssl = require('./routes/registed_ssl');

app.use('/public', express.static('./routes/public/'));
app.use('/api', sl_route);
app.use('/', ssl);

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
var options = {
  key: fs.readFileSync('./cert/server.key'),
  cert: fs.readFileSync('./cert/server.crt'),
  rejectUnauthorized: true
};

app.use((req, res, next) => {
  var err = new Error("ไม่พบ path ที่คุณต้องการ");
  err.status = 404;
  next(err);
});

https.createServer(options, app).listen(port_https,async () => {
  console.log("[success] task 1 : listening on port " + port_https);
  await mongoConfig().catch(err => {
    process.exit();
  });
}).on('error',onError);