var express = require('express');
	app = express();

app.get('/', function(req,res){
	res.sendfile(_dirname + '/client/views/index.html');
});

app.listen(3000, function(){
	console.log('Im Listening...');
});