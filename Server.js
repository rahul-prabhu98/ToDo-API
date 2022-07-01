const express = require('express');
const app = express();
const port = process.env.port || 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todoDB', {
    useMongoClient: true
});

mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({
    extended : true
}));

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let initApp =require('./api/app');
initApp(app);
app.listen(port);
console.log("Server for ToDo List listening on port: " + port);