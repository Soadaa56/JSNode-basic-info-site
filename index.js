const http = require('node:http');
const fs = require("node:fs");

// Local server
 const server = http.createServer((req, res) => {
    let html;

    switch (req.url) {
        case "/":
            res.writeHead(200, { "Content-Type": "text/html" });
            html = fs.readFileSync("./index.html", "utf-8");
            res.end(html);
            break;
        case "/about":
            res.writeHead(200, { "Content-Type": "text/html" });
            html = fs.readFileSync("./about.html", "utf-8");
            res.end(html);
            break;
        case "/contact-me":
            res.writeHead(200, { "Content-Type": "text/html" });
            html = fs.readFileSync("./contact-me.html", "utf-8");
            res.end(html);
            break;
        case "/contactme":
            res.writeHead(200, { "Content-Type": "text/html" });
            html = fs.readFileSync("./contact-me.html", "utf-8");
            res.end(html);
            break;
        default:
            res.writeHead(404, { "Content-Type": "text/html" });
            html = fs.readFileSync("./404.html", "utf-8");
            res.end(html);
            break;
    }
 });

 server.listen(8080, () => {
    console.log("Server listening on 8080");
 });