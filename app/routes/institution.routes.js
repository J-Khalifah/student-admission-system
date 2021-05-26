const controller = require('../controller/institution.controller');

module.exports = function(app){
    app.use(function(req, res, next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/institution/create", controller.createInstitution);

    app.post("/api/institution/update", controller.updateInstitution);

    app.get("/api/institution/get/:institution/:limit", controller.ReadInstitution);

    app.get("/api/institution/delete/:id", controller.deleteInstitution);

}