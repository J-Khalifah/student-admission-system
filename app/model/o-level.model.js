module.exports = (sequelize, Sequelize) => {
    const O_level = sequelize.define('o_level', {
        description:{
            type: Sequelize.STRING,
            allowNull: true
        }
    })
return O_level;
}