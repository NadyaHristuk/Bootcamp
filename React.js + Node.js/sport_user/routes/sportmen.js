const route = require("express").Router();
const controller = require("../controllers/sportsmen");


route.post("/", controller.create, (req, res) => {
        res.json({
            status: 200,
            data: req.data,
        });
});

// route.get("/", controller.readAll, prepareBody, (req, res) => {
//     res.json(req.responseData);
// });
//
// route.get("/:id", controller.readOne, prepareBody, (req, res) => {
//     res.json(req.responseData);
// })
//
//
//
// route.put("/:id", controller.update, prepareBody, (req, res) => {
//     res.json(req.responseData);
// })
//
// route.delete("/:id", controller.delete, prepareBody, (req, res) => {
//     res.json(req.responseData);
// })

module.exports = route;