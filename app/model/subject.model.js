module.exports = (sequelize, Sequelize) => {
    const subject = sequelize.define('subject', {
        subjectName : {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });
return subject;
}