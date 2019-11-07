require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

//initiate app
const app = express();

//assign api key to env variable
const apikey = process.env.APIKEY;

//setting view engine
app.set("view engine", "ejs");

//middleware
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended: false}));

/*
    ROUTES
*/

// GET root //
app.get("/", function (req, res){
    res.render("duo.ejs", {recipe: null, error: null});
}); 

//handling get vegan
app.get("/vegan", function(req, res){

    var options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
    qs: {
        diet: 'vegan',
        number: '2',
        offset: '0',
        type: 'main course',
        query: 'burger'
    },
    headers: {
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'x-rapidapi-key': apikey
    }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        let recipes = (JSON.parse(body));

        let title = recipes.results[0].title
        let readyIn = recipes.results[0].readyInMinutes
        let query = recipes.results[0].query

        res.render("duo.ejs", {recipeTitle: title , time: readyIn, query, error: null});
    });

});
//handling get vegetarian
app.get("/vegetarian", function(req, res){

    var options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
    qs: {
        diet: 'vegetarian',
        number: '2',
        offset: '0',
        type: 'main course',
        query: 'Salad'
    },
    headers: {
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'x-rapidapi-key': apikey
    }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        let recipes = (JSON.parse(body));

        let title = recipes.results[0].title
        let readyIn = recipes.results[0].readyInMinutes
        let query = recipes.results[0].query

        res.render("duo.ejs", {recipeTitle: title , time: readyIn, query, error: null});
    });

});

//handling get Pescatarian
app.get("/Pescatarian", function(req, res){

    var options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
    qs: {
        diet: 'Pescatarian',
        number: '2',
        offset: '0',
        type: 'main course',
        query: 'Seafood'
    },
    headers: {
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'x-rapidapi-key': apikey
    }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        let recipes = (JSON.parse(body));

        let title = recipes.results[0].title
        let readyIn = recipes.results[0].readyInMinutes
        let query = recipes.results[0].query

        res.render("duo.ejs", {recipeTitle: title , time: readyIn, query, error: null});
    });

});

//handling get ketogenic
app.get("/ketogenic", function(req, res){

    var options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
    qs: {
        diet: 'ketogenic',
        number: '2',
        offset: '0',
        type: 'main course',
        query: 'Pizza'
    },
    headers: {
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'x-rapidapi-key': apikey
    }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        let recipes = (JSON.parse(body));

        let title = recipes.results[0].title
        let readyIn = recipes.results[0].readyInMinutes
        let query = recipes.results[0].query

        res.render("duo.ejs", {recipeTitle: title , time: readyIn, query, error: null});
    });

});

//handling get low-sodium
app.get("/low-sodium", function(req, res){

    var options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
    qs: {
        diet: 'low-sodium',
        number: '2',
        offset: '0',
        type: 'main course',
        query: 'Soup'
    },
    headers: {
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'x-rapidapi-key': apikey
    }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        let recipes = (JSON.parse(body));

        let title = recipes.results[0].title
        let readyIn = recipes.results[0].readyInMinutes
        let query = recipes.results[0].query

        res.render("duo.ejs", {recipeTitle: title , time: readyIn, query, error: null});
    });

});



app.listen(3000, function(){
    console.log("server is live on port: 3000");
});
