const chai = require("chai");
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe("POST----/sporsmen/---", () => {
    it("Route exsist and server responsed (thenks god)", (done) => {
        chai.request("http://localhost:9999")
            .post("/sportsmen/")
            .send()
            .then((response) => {
                expect(response.statusCode).to.not.equal(404);
                done();
            })
            .catch((err) => {
                const error = new Error(err);
                error.status = 400;
                done(error);
            })
    });
    it("Should create new user", (done) => {
        chai.request("http://localhost:9999")
            .post("/sportsmen/")
            .send({
                    name: "Podsnejnik",
                pasword: "Podsnejnik"
            })
            .then((response) => {
                expect(response.body.data).to.have.property("_id");
                done();
            })
            .catch((error) => {
                done(error);
            })
    });
    it("Should create status 400", (done) => {
        chai.request("http://localhost:9999")
            .post("/sportsmen/")
            .send()
            .then((response) => {
                expect(response.statusCode).to.not.equal(404);
                expect(response.body.status).to.equal(400);
                done();
            })
            .catch((error) => {
                done(error);
            })
    });
});

describe("GET----/sporsmen/---", () => {
    it("Should get one user", (done) => {
        chai.request("http://localhost:9999")
            .get("/sportsmen/" + sportsmen._id)
            .send({
                name: "Podsnejnik",
                pasword: "Podsnejnik"
            })
            .then((response) => {
                expect(response.body.data).to.have.property("_id");
                done();
            })
            .catch((error) => {
                done(error);
            })
    });
    it("Route exsist and server responsed (thenks god)", (done) => {
        chai.request("http://localhost:9999")
            .post("/sportsmen/")
            .send()
            .then((response) => {
                expect(response.statusCode).to.not.equal(404);
                done();
            })
            .catch((err) => {
                const error = new Error(err);
                error.status = 400;
                done(error);
            })
    });

    it("Should create status 400", (done) => {
        chai.request("http://localhost:9999")
            .post("/sportsmen/")
            .send()
            .then((response) => {
                expect(response.statusCode).to.not.equal(404);
                expect(response.body.status).to.equal(400);
                done();
            })
            .catch((error) => {
                done(error);
            })
    });
});