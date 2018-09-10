var express = require('express');
var app = express();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post("/devices",(request,response) => {
    let device = db.get('devices').findLast((d) => {
        return d.subscription.endpoint == request.body.subscription.endpoint
    })
    if(!!!device.value()) {
        db.get("devices").push({id: db.get('devices').value().length + 1, subscription: request.body.subscription}).write();
        response.status(201)
        response.send({message: "device created"})
    } else {
        response.status(422)
        response.send({message: "device exists"})
    }
})

app.listen(3000,'localhost', () => {
    console.log("Server listening on port 3000")
})