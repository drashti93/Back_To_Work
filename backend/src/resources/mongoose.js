var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
	.connect(
		"mongodb://root:root@cluster0-shard-00-00-ggwql.mongodb.net:27017,cluster0-shard-00-01-ggwql.mongodb.net:27017,cluster0-shard-00-02-ggwql.mongodb.net:27017/root?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin",
		{
			useCreateIndex: true,
			useNewUrlParser: true,
			poolSize: 10
		}
	)
	.then(
		() => {
			console.log(`Sucessfully Connected to MogoDB`);
		},
		err => {
			console.log(`Error Connecting to MogoDB: ${err}`);
		}
	);

module.exports = { mongoose };