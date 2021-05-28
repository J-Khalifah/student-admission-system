module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users', {
        firstName: {
            type: Sequelize.STRING,
            allowNull : true,
            unique: true
        },
        middleName: {
            type : Sequelize.STRING,
            allowNull: true,
            unique: true
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: true,
            unique: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        userName:{
            type: Sequelize.STRING,
            allowNull: true,
            unique: true
        },
        password:{
            type: Sequelize.STRING,
            allowNull: false
        },
        phoneNumber:{
            type: Sequelize.STRING,
            allowNull: true,
            unique: true
        },
        image:{
            type: Sequelize.STRING,
            allowNull: true,
            unique: true
        },
        nationality:{
            type: Sequelize.STRING,
            allowNull: true,
            unique: true
        },
        state:{
            type: Sequelize.STRING,
            allowNull: true,
            unique: true
        },
        dateOfBirth:{
            type: Sequelize.DATE,
            allowNull: true,
            unique: true
        }
    },
    {
        scopes: {
            withoutPassword: {
                attributes: {exclude: ['password']}
            }
        }
    });
return User;
}