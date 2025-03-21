const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.end('hello from express')
});

app.get('/about', (req, res)=>{
    res.end('page about')
});

app.get('/contact', (req, res)=>{
    res.end('page contact')
});



app.use((req, res)=>{
    res.end('error 404')
});

module.exports = app;