var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/results", function(req, res){
    request("http://www.omdbapi.com/?s=guardians&apikey=2727e8ba", function(error, response, body){
        if(!error && response.statusCode == 200){
           var movieResults = JSON.parse(body);
           res.render("results", {movieResults: movieResults});
        }
    });
});

app.listen(3000, function(){
    console.log("App started at port 3000");
});

