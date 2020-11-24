const express = require("express");
const app = express();
const axios = require("axios");

app.set("view engine", "ejs");

app.get("/results", function(req, res){
    let searchId = req.query.name;
    let searchUrl = `http://www.omdbapi.com/?s=${searchId}&apikey=thewdb`;
    axios.get(searchUrl)
    .then(function(body){
        let data = (body.data);
        res.render("results", {data: data})
    })
    .catch(function(error){
        res.send(error);
    })
    .finally(function(){
        res.send("I ALWAYS RUN BITCHES");
    });
});

app.get("/", function(req,res){
    res.render("search");
})
app.listen(5000, function(){
    console.log("sever is started at localhost 5000");
});