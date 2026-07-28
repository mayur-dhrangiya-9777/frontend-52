const http = require('http');
const fs = require('fs');
const url = require('url');
var server = http.createServer(function (request, response) {


    var address = url.parse(request.url, true);
    var page = address.path;
    var filename = '404.html'
    if (page === '/') {
        filename = 'home.html';
    }
    else if (page === '/menu') {
        filename = 'menu.html';
    }
    else if (page === '/gallery') {
        filename = 'gallery.html';
    }
    else if (page === '/contact') {
        filename = 'contact.html';
    }
    else if (page === '/bookhall') {
        filename = 'bookhall.html';
    }
    response.writeHead(200, { 'content-type': 'text/html' });
    console.log('i am trying to read file');
    var FileContent = fs.readFileSync(filename);
    response.write(FileContent);
    console.log('i have successfully read file');
    return response.end();
});
server.listen(3000);
console.log('ready to accept request');