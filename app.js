const app = require('./settings/server');



const port = 3000
app.listen(port, function(){
	console.log('Server running on localhost:' + port + '!');
});