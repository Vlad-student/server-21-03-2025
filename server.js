const http = require('http');           // core modules
const mongoose = require('mongoose');   // npm modules
const app = require('./app');           // local owm modules

mongoose
.connect("mongodb://127.0.0.1:27017/mongo_4")
.then(()=>{console.log('mongodb connect success');
})
.catch((err)=>{console.log('mongodb connect error:', err);

});

const server = http.createServer(app);

const port = 3000;

server.listen(port, ()=>{
    console.log('server started listen ='+ port);
});

