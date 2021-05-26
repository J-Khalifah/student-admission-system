module.exports = (sequelize, Sequelize) => {
   const jamb = sequelize.define('jamb', {
        description:{
           type : Sequelize.STRING,
           allowNull: true
        },
        score: {
           type: Sequelize.INTEGER,
           allowNull: false,
           unique: true
        }
    });
return jamb;
}