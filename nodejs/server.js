const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

    // Modern URL API
    const myURL = new URL(req.url, `http://${req.headers.host}`);
    let pathname = myURL.pathname;

    let filePath = "";

    switch (pathname) {

        case "/":
        case "/home":
            filePath = path.join(__dirname, "pages", "home.html");
            break;

        case "/menu":
            filePath = path.join(__dirname, "pages", "menu.html");
            break;

        case "/gallery":
            filePath = path.join(__dirname, "pages", "gallery.html");
            break;

        case "/bookhall":
            filePath = path.join(__dirname, "pages", "bookhall.html");
            break;

        case "/contact":
            filePath = path.join(__dirname, "pages", "contact.html");
            break;

        default:
            filePath = path.join(__dirname, "pages", "404.html");
            break;
    }

    fs.readFile(filePath, (err, data) => {

        if (err) {

            console.log(err);

            res.writeHead(500, { "Content-Type": "text/html" });
            res.write("<h1>500 Internal Server Error</h1>");
            res.end();

        } else {

            if (pathname !== "/" &&
                pathname !== "/home" &&
                pathname !== "/menu" &&
                pathname !== "/gallery" &&
                pathname !== "/bookhall" &&
                pathname !== "/contact") {

                res.writeHead(404, { "Content-Type": "text/html" });

            } else {

                res.writeHead(200, { "Content-Type": "text/html" });
            }

            res.write(data);
            res.end();
        }
    });

});

server.listen(5000, () => {

    console.log("Server running on http://localhost:5000");

});