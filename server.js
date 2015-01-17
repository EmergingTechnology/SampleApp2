var express = require('express');
	app = express();

app.get('/', function (req, res) {
	res.sendfile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

app.listen(3000, function(){
	console.log('Server is Running at http://localhost:3000/');
});
