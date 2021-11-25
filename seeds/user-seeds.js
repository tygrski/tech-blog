const sequelize = require('../config/connection');
const { User } = require('../models');

const userinfo = [
  {
    user_name: 'amy',
    password: 'amypassword'
  },
  {
    user_name: 'bill',
    password: 'billpassword' 
  },
  {
      user_name: 'bill',
      password: 'billpassword' 
  }
];

exports.seedUser = () => User.bulkCreate(userinfo, {individualHooks: true});
// exports.seedUser = seedUser;