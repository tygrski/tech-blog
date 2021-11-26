const sequelize = require('../config/connection');
const { Comments } = require('../models');

const commentdata = [
  {
    comment_content: '111111111',
    user_id: "1",
    post_id: "1"

  },
  {
    comment_content: '222222',
    user_id: "2",
    post_id: "2"
  },
  {
    comment_content: '33333333',
    user_id: "3",
    post_id: "3"
  }
];
// exports.seedComments = () => Comments.bulkCreate(commentdata);
exports.seedComments = () => Comments.bulkCreate(commentdata, {individualHooks: true} );
// module.exports = seedComments;