var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var email = require('emailjs/email');

const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");

var server 	= email.server.connect({
   user:     "brad.rumack@gmail.com", 
   password: "ogahuzvywfripkml", 
   host:     "smtp.gmail.com", 
   ssl:     true
});


/* --- ROUTES --- */

app.get('/', function(req, res) {
    res.render("home");
});

app.get('/buying', function(req, res) {
    res.render("buying");
});

app.get('/selling', function(req, res) {
    res.render("selling");
});

app.get('/mortgages', function(req, res) {
    res.render("mortgages");
});

app.get('/short-sale', function(req, res) {
    res.render("shortsale");
});

app.get('/services', function(req, res) {
    res.render("services");
});
    
app.get('/current-market', function(req, res) {
    res.render("currentmkt");
});
    
app.get('/blog', function(req, res) {
    res.render("blog");
});

app.get('/reviews', function(req, res) {
    res.render("reviews");
});

app.get('/contact', function(req, res) {
    res.render("contact");
});

app.post('/contact', function(req,res) {
    console.log(req.body);
    server.send({
       text:    req.body.message, 
       from:    req.body.first_name + ' ' + req.body.last_name + ' <' + req.body.email + '>',
       to:      "Rick <rick@rickrumack.com>",
       subject: "Contact Form Submission"
    }, function(err, message) { console.log(err || message); });
    res.redirect('/');
});

app.get('/news', function(req, res) {
    res.render("news");
});

app.get('/about', function(req, res) {
    res.render("about");
});

app.get('/mls', function(req, res) {
    res.render("mls");
});


app.get('*', function(req, res) {
    res.redirect('/');
});












app.listen(PORT, process.env.IP, function() {
    console.log(`Server started on port ${PORT}...`);
});
