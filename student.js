const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const corsOption = {
    origin: 'http//localhost:5700'
};

app.use(cors(corsOption));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

const db = require('./app/model');
const { admin } = require('./app/config/auth.config');
const Role = db.role;


db.sequelize.sync();
// db.sequelize.sync({force: true}).then(() =>{
//     console.log('Drop and Resync Database with {force: true}');
//     initial();
// });

require('./app/routes/auth.routes')(app)
require('./app/routes/subject.routes')(app)
require('./app/routes/grade.routes')(app)
require('./app/routes/jamb.routes')(app)
require('./app/routes/institution.routes')(app)
require('./app/routes/o-level.routes')(app)
require('./app/routes/user.routes')(app)

const PORT = process.env.PORT || 5700;

app.get('/', (req, res) => {
    res.send('welcome');
});

app.listen(PORT, ()=> {
    console.log(`server is running on port ${PORT}`)
});

function initial(){
    Role.create({
        id: 1,
        name: 'admin'
    });
    Role.create({
        id: 2,
        name: 'user'
    });
}

