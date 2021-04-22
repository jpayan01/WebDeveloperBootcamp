const express = require("express");
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
    {
        username: 'Joel', 
        comments: 'The best in test automation'
    },
    {
        username: 'Marcela',
        comments: "Hottie and my love!"
    }
]

app.get('/comments', (req, res)=> {
    res.render('comments/index', {comments})
})

app.get("/", (req, res)=> {
    res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", (req, res)=>{
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
});

app.get('/random', (req, res)=> {
    const randNumber = Math.floor(Math.random() * 10) + 1; 
    res.render('random', {rand: randNumber}); 
});

app.get('/r/:subreddit', (req, res) => {
    const {subreddit } = req.params;
    res.render('subreddit', {subreddit});

})

app.listen(3000, ()=>{
    console.log("Server listening on Port: 3000");
}); 