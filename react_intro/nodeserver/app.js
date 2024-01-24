const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Error: Din fil er ikke funnet helt ærlig sjamener');
        } else {
            res.write(data);
        }
        res.end(); 
    });

    
});

server.listen(port, function (error) {
    if (error) {
        console.log('helt ærlig noe gikk galt as', error);
    } else {
        console.log('Server er på port helt ærlig' + port);
    }
});
