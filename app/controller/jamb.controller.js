const { jamb } = require('../model');
const db = require('../model');
const Jamb = db.jamb;

//creating a new Jamb

exports.createJamb = (req, res) => {
    Jamb.create({
        score: req.body.score,
        description: req.body.description,
        subjectId: req.body.subjectId,
        gradeId: req.body.gradeId,
        userId: req.body.userId
    }).then(jamb => {
        res.status(200).send({
            success: true,
            result: jamb,
            message: 'A Jamb has been created successfully'
        })
    }).catch(err => {
        res.status(404).send({success: false, message: err.message})
    });
}

//read jambs

exports.ReadJamb = (req, res) => {
    let offset = parseInt(req.params.jamb) * parseInt(req.params.limit)
    Jamb.findAndCountAll({
        limit: parseInt(req.params.limit),
        offset: offset,
        order: [
            ['createdAt', 'DESC']
        ]
    }).then(result => {
        res.status(200).send({result: result, success: true, message: 'jamb scores are listed below'})
    }).catch(err => {
        res.status(400).send({message:err.message, success: false})
    })
}

//read Jamb by Score

exports.ReadJambByScore = (req, res) => {
    let offset = parseInt(req.params.jamb) * parseInt(req.params.limit)
    Jamb.findAndCountAll({
        limit: parseInt(req.params.limit),
        offset: offset,
        order: [
           [ 'createdAt', 'updatedAt']
        ],
        where: {
            score: req.params.score
        }
    }).then(result => {
        res.status(200).send({result: result, success: true, message: 'jamb scores are listed below according to their names'})
    }).catch(err => {
        res.status(400).send({message:err.message, success: false})
    })
}

//update Jamb

exports.updateJamb = (req, res) => {
    Jamb.update({
        score: req.body.score,
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

//delete Jamb

exports.deleteJamb = (req, res) =>{
    Jamb.destroy({
        where:{
            id: req.params.id
        }
    }).then(result => {
        res.status(200).send({result: result, success: true, message: 'jamb score has been deleted successfully'})
    }).catch(err => {
        res.status(400).send({message:err.message, success: false})
    })
}