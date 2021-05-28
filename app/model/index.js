const config = require('../config/db.config');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorAliases: false,

        pool:{
            max: config.pool.max,
            idle: config.pool.idle,
            acquire: config.pool.acquire,
            min: config.pool.min
        }
    }
);

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./user.model')(sequelize,Sequelize);
db.role = require('./role.model')(sequelize,Sequelize);
db.jamb = require('./jamb.model')(sequelize,Sequelize);
db.institution = require('./institution.model')(sequelize,Sequelize);
db.o_level = require('./o-level.model')(sequelize,Sequelize);
db.grade = require('./grade.model')(sequelize,Sequelize);
db.subject = require('./subject.model')(sequelize,Sequelize);


/*many to many relationship btw users and roles 
1. users
2. roles
3. user_roles
*/
db.role.belongsToMany(db.user, {
    through: 'user_roles',
    foreignKey: 'roleId',
    otherKey: 'userId'
});
db.user.belongsToMany(db.role, {
    through: 'user_roles',
    foreignKey: 'userId',
    otherKey: 'roleId'
});


/*one to many relationship btw user and olevel
i.e a user has many o_level*/

db.user.hasMany(db.o_level);

/*one to many relationship btw subject and olevel
i.e a subject has many o_level*/

db.subject.hasMany(db.o_level);

/*one to many relationship btw grade and olevel
i.e a grade has many o_level*/

db.grade.hasMany(db.o_level);


/*one to many relationship btw subject and jamb
i.e a subject has many jamb*/

db.subject.hasMany(db.jamb);

/*one to many relationship btw grade and jamb
i.e a grade has many jamb*/

db.grade.hasMany(db.jamb);

/*one to many relationship btw user and jamb
i.e a user has many jamb*/

db.user.hasMany(db.jamb);

/*one to many relationship btw user and institution
i.e a user has many institutions*/

db.user.hasMany(db.institution);

db.ROLES = ['user', 'admin'];

module.exports = db;


