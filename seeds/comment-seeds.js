const sequelize = require('../config/connection');
const { Comments } = require('../models');

const commentdata = [
  {
    content: '111111111'
  },
  {
    content: '222222'
  },
  {
    content: '33333333'
  }
];
// exports.seedComments = () => Comments.bulkCreate(commentdata);
exports.seedComments = () => Comments.bulkCreate(commentdata, {individualHooks: true} );
// module.exports = seedComments;