const Sportsmens = require("../models/sportsmen");

module.exports.create = (req, res, next) => {
    Sportsmens.create({
        name: req.body.name,
        password: req.body.password
    })
        .then((user) => {
        req.data = user._doc;
        next();
    })
        .catch((err) => {
        next(err);
    });
}

// const controller = {
//     create(req, res, next){
//         Vegetables.create({
//             name: req.body.name,
//             weight: req.body.weight,
//             count: req.body.count
//         }).then((vegetable) => {
//             req.data = vegetable._doc;
//             next();
//         })
//
//     },
//     readAll(req, res, next){
//         Vegetables.find({}).exec()
//         .then((vegetables) => {
//             req.data = vegetables;
//             next();
//         })
//     },
//     readOne(req, res, next){
//         Vegetables.findById(req.params.id)
//         .then((vegetable) => {
//             req.data = vegetable;
//             next();
//         })
//     },
//     update(req, res, next){
//         Vegetables.findByIdAndUpdate(req.params.id, {
//             name: req.body.name,
//             weight: req.body.weight,
//             count: req.body.count
//         }).then((vegetable) => {
//             req.data = vegetable;
//             next();
//         })
//     },
//     delete(req, res, next){
//         Vegetables.findByIdAndRemove(req.params.id)
//             .then((vegetable) => {
//                 req.data = vegetable;
//                 next();
//             })
//     }
// };

// module.exports = controller;