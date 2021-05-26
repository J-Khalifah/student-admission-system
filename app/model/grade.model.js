module.exports = (sequelize, Sequelize) => {
    const grade = sequelize.define('grade', {
        name :{
            type: Sequelize.STRING,
            allowNull: false,
            unique: true

        },
        description:{
            type: Sequelize.STRING,
            allowNull: true
        }
    });
return grade;
}
