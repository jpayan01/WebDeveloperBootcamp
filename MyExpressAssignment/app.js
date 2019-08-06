    var express = require("express");
    var app = express();

    app.get("/", function(req, res){
        res.send("Hi there, welcome to my assignmet");
    });

    app.get("/speak/:animal", function(req, res){
        var animal = req.params.animal;
        var sound = "";
        if(animal === "pig"){
            sound = "oink!";
        } else if (animal === "cow") {
            sound = "mooo!";
        }

        res.send("The " + animal + " says " + sound);
    });

    app.get("/speak/:message/:times", function(req, res){
        var message = req.params.message;
        var times = Number (req.params.times);
        var result = "";

        for(var i = 0; i < times; i++) {
            result += message + " ";
        }

        res.send(result);
    });

    app.get("*", function(req, res){
        res.send("Sorry, what are you doing with your life?");
    });

    app.listen(3000, function() {
        console.log("Server started on port 3000");
    });
