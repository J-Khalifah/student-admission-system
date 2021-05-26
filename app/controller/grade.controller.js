const { grade } = require('../model');
const db = require('../model');
const Grade = db.grade;

//creating a new grade

exports.createGrade = (req, res) => {
    Grade.create({
        name: req.body.name,
        description: req.body.description
    }).then(grade => {
        res.status(200).send({
            success: true,
            result: grade,
            message: 'A grade has been created successfully'
        })
    }).catch(err => {
        res.status(404).send({success: false, message: err.message})
    });
}

//read grade 

exports.ReadGrade = (req, res) => {
    let offset = parseInt(req.params.grade) * parseInt(req.params.limit)
    Grade.findAndCountAll({
        limit: parseInt(req.params.limit),
        offset: offset,
        order: [
            ['createdAt', 'DESC']
        ]
    }).then(result => {
        res.status(200).send({result: result, success: true, message: 'grades are listed below'})
    }).catch(err => {
        res.status(400).send({message:err.message, success: false})
    })
}

//read grade by gradeName

exports.ReadGradeByName = (req, res) => {
    let offset = parseInt(req.params.grade) * parseInt(req.params.limit)
    Grade.findAndCountAll({
        limit: parseInt(req.params.limit),
        offset: offset,
        order: [
           [ 'createdAt', 'updatedAt']
        ],
        where: {
            name: req.params.name
        }
    }).then(result => {
        res.status(200).send({result: result, success: true, message: 'grades are listed below according to their names'})
    }).catch(err => {
        res.status(400).send({message:err.message, success: false})
    })
}

//update grade

exports.updateGrade = (req, res) => {
    Grade.update({
        name: req.body.name,
        description: req.body.description
    },
    {
        where: {
            id: parseInt(req.body.id)
        }
    }).then(result => {
        res.status(200).send({result: result, success: true, message: 'grade has been updated successfully'})
    }).catch(err => {
        res.status(400).send({message:err.message, success: false})
    })
}

//delete grade

exports.deleteGrade = (req, res) =>{
    Grade.destroy({
        where:{
            id: req.params.id
        }
    }).then(result => {
        res.status(200).send({result: result, success: true, message: 'grade has been deleted successfully'})
    }).catch(err => {
        res.status(400).send({message:err.message, success: false})
    })
}