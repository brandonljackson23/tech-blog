const bcrypt = require('bcrypt');
const password = "password"
const hash = bcrypt.hashSync(password, 10);

const { User } = require('../models');

const userData = [{
    username: 'TJ',
    email: 'shorty22@gmail.com',
    password: hash,
},
{
    username: 'Casey',
    email: 'givememore7@gmail.com',
    password: hash,
},
{
    username: 'Brock',
    email: 'neverkissedagirl40@gmail.com',
    password: hash,
},
{
    username: 'Clint',
    email: 'likeclockwork2pm@gmail.com',
    password: hash,
},
{
    username: 'Julie',
    email: 'juliebean32@gmail.com',
    password: hash,
},
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;