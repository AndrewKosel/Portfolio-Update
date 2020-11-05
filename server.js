var express = require("express");
var path = require("path");
var fs = require("fs");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));



// var notes = [];


// Routes
// =============================================================

// Basic routes that sends the user first to the AJAX Page
app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "public/contact.html"));
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

// Displays Notes
app.get("/portfolio", function(req, res) {
    res.sendFile(path.join(__dirname, "public/portfolio.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log(`App listening on PORT http://localhost:${PORT}`);
});