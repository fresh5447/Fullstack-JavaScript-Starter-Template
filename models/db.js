var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');

var options = {
 server:  { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
 replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};  
var mongodbUri = process.env.MONGODB_URI || "mongodb://localhost/YOURDATABASE";
var mongooseUri = uriUtil.formatMongoose(mongodbUri);

mongoose.connect(mongooseUri, options);
