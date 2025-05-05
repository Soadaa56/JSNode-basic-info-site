const http = require('node:http');
const fs = require("node:fs");

// Local server
 const server = http.createServer((req, res) => {
    const test = "test var";
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let html = fs.readFileSync("./index.html", "utf-8");
    html = html.replace("{{test}}", test);
    res.end(html);
 });

 server.listen(8080, () => {
    console.log("Server listening on 8080");
 });