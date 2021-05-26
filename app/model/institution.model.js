module.exports = (sequelize, Sequelize) => {
    const institution = sequelize.define('institution', {
        UniversityFirstChoice :{
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        UniversitySecondChoice :{
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        PolyFirstChoice :{
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        PolySecondChoice :{
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        EduFirstChoice :{
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        EduSecondChoice :{
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        }
    });
return institution;
}