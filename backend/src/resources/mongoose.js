var mongoose = require('mongoose');
var uri = `mongodb://root:root@cluster0-shard-00-00-ggwql.mongodb.net:27017,cluster0-shard-00-01-ggwql.mongodb.net:27017,cluster0-shard-00-02-ggwql.mongodb.net:27017/root?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`
mongoose.Promise = global.Promise;
console.log(uri);
mongoose.connect(uri).then(
    () => { console.log("Connected to MongoDB") },
    err => { console.log("Did not connect", err) }
  );

module.exports = {mongoose};