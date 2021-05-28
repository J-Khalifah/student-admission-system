module.exports = (sequelize, Sequelize) => {
    const institution = sequelize.define('institution', {
        name :{
            type: Sequelize.STRING,
            allowNull: false,
            unique: true

        },
        type:{
            type: Sequelize.STRING,
            allowNull: false
        },
        location:{
            type: Sequelize.STRING,
            allowNull: false
        }
    });
return institution;
}