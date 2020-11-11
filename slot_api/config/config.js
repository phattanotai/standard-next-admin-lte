
const env = require("../env");
var mongoose = require("mongoose");
var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
const bodyParser = require("body-parser");

// คำสั่งเชื่อม MongoDB
module.exports.mongoConfig = () =>{
    return new Promise((resolve,reject) => {
        var mongo_uri = env.mongo_uri;
        mongoose.Promise = global.Promise;
        mongoose
          .connect(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true })
          .then(
            () => {
              console.log("[success] task 2 : connected to the database ");
              resolve(true);
            },
            (error) => {
              console.log("[failed] task 2 " + error);
              reject(false);
            }
          );
    });
}

module.exports.expressConfig = () =>  {
  return new Promise((resolve,reject) => {
    var app = express();
    var port = env.port;
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    const sl_route = require('./../routes/');
    app.use('/public', express.static('../routes/public/'));
    app.use('/api', sl_route);
    app.listen(port,async () => {
      console.log("[success] task 1 : listening on port " + port);
      resolve(true);
    }).on("error", onError);

    app.use((req, res, next) => {
      var err = new Error("ไม่พบ path ที่คุณต้องการ");
      err.status = 404;
      next(err);
    });
  });
}

// Error run server
const onError = function(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  switch (error.code) {
    case 'EACCES':
      console.error('port ' + error.port + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error('port ' + error.port + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

module.exports.onError = onError;