const express = require("express");
const app = express();

// app.use(()=> {
//     console.log('We got a new request!');
// })
// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Welcome to the homepage!");
});

app.get('/r/:subreddit', (req, res) =>{
    const {subreddit} = req.params;
    res.send(`this is a ${subreddit} subreddit.`);
})
// "/bye" => "Goodbye"
app.get("/dogs", function(req, res){
    res.send("Woof!");
});
// "/dog" => "MEOW"
app.get("/cats", function(req, res){
    res.send("Meow!");
});

app.get('/search', (req, res)=> {
    const {q} = req.query;
    res.send(`<h2>Search results for ${q}</h2`);
})

app.listen(3000, function() {
    console.log("Listening on port 3000");
});