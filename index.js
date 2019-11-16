const express = require('express');
const app = express();

// sets the public folder
app.use(express.static('public'));

// set pug as the html templater
app.set('view engine', 'pug');

// Intro Router
app.get("/intro", function(req, res) {
    res.render("intro", {});
});

// CV Router
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
app.get("/", function(req, res) {
    res.render("teaching", {});
});

// Home Router
app.get("/contact", function(req, res) {
    res.render("contact", {});
});

// Prof Dev Router
app.get("/profdev", function(req, res) {
    res.render("profdev", {});
});

// 404 Router
// This is a generic router and must be last in the list to funtion correctly
app.use(function(req, res) {
    res.redirect("/");
});

// Open the server on port 3000
app.listen(3000);
