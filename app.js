/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var fs = require("fs");
var id3 = require("id3js");
var ffmetadata = require("ffmetadata");
var async = require("async");
//var forEach = require("async-foreach").forEach;



var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get("/api/music.json", function(req, res) {
	var fileList = [];
	var trackList = [];
	async.waterfall([
		function(callback) {
			fs.readdir("public/music/", function(err, files) {
				callback(null, files);
			});
		},
		function(files, callback) {
			var tracks = [];
			console.log("files: ", files);
			async.each(files, function(item, cb) {
				/*id3({file: "public/music/" + item, type: id3.OPEN_LOCAL}, function(err, tags) {
					tracks.push({filename: item, tags: tags});
					cb();
				});*/
				ffmetadata.read("public/music/" + item, function(err, tags) {
					console.log("done read: " + item);
					console.log(tags, err);
					tracks.push({filename: item, tags: tags});
					cb();
				});
			}, function(err) {
				//console.log(tracks);
				callback(null, tracks);
			});
		}
	], function(err, result) {
		res.json(result);
	});

});

http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});
