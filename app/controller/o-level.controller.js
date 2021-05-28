const { o_level } = require('../model');
const db = require('../model');
const Olevel = db.o_level;

//creating a new Olevel

exports.createOlevel = (req, res) => {
    Olevel.create({
        description: req.body.description,
        userId: req.body.userId,
        gradeId: req.body.gradeId,
        subjectId: req.body.subjectId
    }).then(o_level => {
        res.status(200).send({
            success: true,
            result: o_level,
            message: 'An o_level has been created successfully'
        })
    }).catch(err => {
        res.status(404).send({success: false, message: err.message})
    });
}

//read o_level

exports.ReadOlevel = (req, res) => {
    let offset = parseInt(req.params.o_level) * parseInt(req.params.limit)
    Olevel.findAndCountAll({
        limit: parseInt(req.params.limit),
        offset: offset,
        order: [
            ['createdAt', 'DESC']
        ]
    }).then(result => {
        res.status(200).send({result: result, success: true, message: 'o_levels are listed below'})
    }).catch(err => {
        res.status(400).send({message:err.message, success: false})
    })
}

//update o_level

exports.updateOlevel = (req, res) => {
    Olevel.update({
        description: req.body.description
    },
    {
        where: {
            id: parseInt(req.body.id)
        }
    }).then(result => {
        res.status(200).send({result: result, success: true, message: 'o_level has been updated successfully'})
    }).catch(err => {
        res.status(400).send({message:err.message, success: false})
    })
}

//delete o_level

exports.deleteOlevel = (req, res) =>{
    Olevel.destroy({
        where:{
            id: req.params.id
        }
    }).then(result => {
        res.status(200).send({result: result, success: true, message: 'o_level has been deleted successfully'})
    }).catch(err => {
        res.status(400).send({message:err.message, success: false})
    })
}