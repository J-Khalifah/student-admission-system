const controller = require('../controller/grade.controller');

module.exports = function(app){
    app.use(function(req, res, next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/grade/create", controller.createGrade);

    app.post("/api/grade/update", controller.updateGrade);

    app.get("/api/grade/get/:grade/:limit", controller.ReadGrade);

    app.get("/api/grade/delete/:id", controller.deleteGrade);
    
    app.get("/api/grade/read/:grade/:limit/:grade", controller.ReadGradeByName)

}