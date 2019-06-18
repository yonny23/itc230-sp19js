'use strict'

import {delete, get } from "../lib/book.js";

import express, { static } from "express";
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(static(__dirname + '/public')); // allows direct navigation to static files
app.use(require("body-parser").urlencoded({extended: true}));

import handlebars from "express-handlebars";
app.engine(".html", handlebars({extname: '.html'}));
app.set("view engine", ".html");

// static file
app.get('/', function(req,res){
    res.type('text/html');
    res.sendFile(__dirname + '/public/home.html'); 
});

// text response
app.get('/about', function(req,res){
    res.type('text/plain');
    res.send('About page');
});

