const express = require("express");
const app = express();

app.get("/", (req, res) => res.sendFile('index.html', { root: '.'}));
app.get("/about", (req, res) => res.sendFile('about.html', { root: '.'}));
app.get("/contact-me", (req, res) => res.sendFile('contact-me.html', { root: '.'}));
app.get("/404", (req, res) => res.sendFile('404.html', { root: '.'}));
app.use((req, res, next) => { 
    res.status(404).sendFile('404.html', { root: '.'}); 
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Express listening on port ${PORT}`);
});