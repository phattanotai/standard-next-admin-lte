var express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const env = require('./env');
const {mongoConfig,expressConfig,onError} = require('./config/config');

var app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = env.port;

const sl_route = require('./routes/');
app.use('/public', express.static('./routes/public/'));
app.use('/api', sl_route);
app.listen(port,async () => {
  console.log("[success] task 1 : listening on port " + port);
  await mongoConfig().catch(err => {
    process.exit(1);
  });
}).on("error", onError);;

app.use((req, res, next) => {
  var err = new Error("ไม่พบ path ที่คุณต้องการ");
  err.status = 404;
  next(err);
});

