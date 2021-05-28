const controller = require('../controller/grade.controller');
const authJwt = require('../middleware/authjwt.middleware');
const verifySignUp = require('../middleware/verifysignup.middleware');

module.exports = function(app){
    app.use(function(req, res, next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/grade/create",[
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignUp.checkDuplicateNameOrDescription
    ], 
    controller.createGrade);

    app.post("/api/grade/update",[
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignUp.checkUpdateDuplicateNameOrDescription
    ], 
    controller.updateGrade);

    app.get("/api/grade/get/:grade/:limit",[
    authJwt.verifyToken,
    authJwt.isUserOrAdmin
    ],
    controller.ReadGrade);

    app.get("/api/grade/delete/:id",[
    authJwt.verifyToken,
    authJwt.isAdmin
    ], 
    controller.deleteGrade);
    
    app.get("/api/grade/read/:name",[
    authJwt.verifyToken,
    authJwt.isUserOrAdmin
    ], 
    controller.ReadGradeByName)

}