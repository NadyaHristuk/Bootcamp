// require("./utils/db");
// const app = require("express")();
// const testRoute = require("./routes/test");
// const vegetablesRoute = require("./routes/vegetables");
// const bodyParser = require("body-parser");
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
//
// app.use((request, response, next) => {
//     console.log(`--->  ${request.method} -- ${request.url}`);
//     next();
// });
//
// app.use("/test/", testRoute);
//
// app.use("/vegetables/", vegetablesRoute);
//
// app.listen(9999);


// server.js
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
app.use(bodyParser.urlencoded({extended: true}))
// const port = 8000;
// app.listen(port, () => {
//     console.log('We are live on ' + port);
// });

app.listen(3000, function() {
    console.log('listening on 3000')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})

app.post('/quotes', (req, res) => {
    console.log(req.body)
})