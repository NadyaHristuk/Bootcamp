// server.js
require("./utils/db")
const app  = require('express')();
const sportsmenRoute  = require('./routes/sportmen');
// const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
// const app            = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
// // const port = 8000;
// // app.listen(port, () => {
// //     console.log('We are live on ' + port);
// // });
//
// app.listen(3000, function() {
//     console.log('listening on 3000')
// })
//
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
//     // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
//     // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
// })

app.use('/sportsmen/', sportsmenRoute);

app.use((err, req, res, next) => {
    res.json({
        status: err.status,
        data: null,
        errors: [err.message]
    })
});

app.listen(9999, () => {
    console.log('server is started!');
});