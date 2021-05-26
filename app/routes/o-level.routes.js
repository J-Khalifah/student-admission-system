const controller = require('../controller/o-level.controller');

module.exports = function(app){
    app.use(function(req, res, next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/o_level/create", controller.createOlevel);

    app.post("/api/o_level/update", controller.updateOlevel);

    app.get("/api/o_level/get/:o_level/:limit", controller.ReadOlevel);

    app.get("/api/o_level/delete/:id", controller.deleteOlevel);

}