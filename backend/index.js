var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var MongoDBStore = require('connect-mongodb-session')(session);
var devops = require("./src/routes/devops")
var mongoose = require('../backend/src/resources/mongoose')

app.use(
  cors({
      origin: `http://localhost:3000`,
      credentials: true
  })
);
app.use('/static',express.static(__dirname + 'public'));

var sessionStore = new MongoDBStore({
  uri: `mongodb://root:root@cluster0-shard-00-00-ggwql.mongodb.net:27017,cluster0-shard-00-01-ggwql.mongodb.net:27017,cluster0-shard-00-02-ggwql.mongodb.net:27017/root?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`,
  collection: 'site_sessions'
});

app.use(session({
  secret: "sjlabssecret",
  resave: false,
  saveUninitialized: false,
  duration: 600000000000 * 60 * 1000,
  activeDuration: 6 * 60 * 60 * 1000,
    cookie : {
      maxAge: 1000* 60 * 60 *24 * 365,
      expires : 3600000 * 24 * 60
  },
  store: sessionStore
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/static',express.static('public'));

app.use(function(req, res, next) {
  res.setHeader(
      "Access-Control-Allow-Origin",
      `http://localhost:3000`
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, XMLHttpRequest"
  );
  res.setHeader("Cache-Control", "no-cache");
  next();
});

app.use('/api', devops)

app.listen(8000);
console.log("Server listening on port 8000");
