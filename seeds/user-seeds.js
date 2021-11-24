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

const seedUser = () => User.bulkCreate(userinfo, {individualHooks: true});
module.export = seedUser;