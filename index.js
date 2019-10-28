const express = require('express');
const app = express();

// sets the public folder
app.use(express.static('public'));

// set pug as the html templater
app.set('view engine', 'pug');

// Home Router
app.get("/", function(req, res) {
    res.redirect("/teaching");
});

// Home Router
app.get("/cv", function(req, res) {
    res.render("cv", {});
});

// Conducting Router
app.get("/conducting", function(req, res) {
    res.render("conducting", {});
});

// Coaching Router
app.get("/coaching", function(req, res) {
    res.render("coaching", {});
});

// Home Router
app.get("/teaching", function(req, res) {
    res.render("teaching", {});
});

// 404 Router
// This is a generic router and must be last in the list to funtion correctly
app.use(function(req, res) {
    res.send("ERROR 404");
});

// Open the server on port 3000
app.listen(3000);
