const mongoose = require("mongoose");

mongoose.connect("mongodb://elhe:4u4undra@ds241489.mlab.com:41489/test_base");
 // mongodb://юзер:пароль@хост:порт/имя_бд
mongoose.connection.on('error', (e) => {
    console.log("CHECK YOUR DATABASE!");
    console.log(e);
});
mongoose.connection.once('open', () => {
    console.log("DB IS STARTED!");
});