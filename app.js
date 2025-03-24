const express = require('express');
const app = express();

// app.get('/products/:id', (req, res) =>{
// const requestStr = `method: ${req.method}, <br>
// path: ${req.path}, <br>
// query: ${JSON.stringify(req.query)}, <br>
// url: ${req.url}, <br>
// hostname: ${req.hostname}, <br>
// params: ${JSON.stringify(req.params)}, <br>
// key: ${req.id}
// `; 
// res.end(`<h1>${requestStr}</h1>`);
// });

app.get('/users/:userId', (req, res) =>{
    res.end(`<h1> ${req.path} <br> ${req.params.userId} </h1>`)
});

module.exports = app;
