const sequelize = require('../config/connection');
const { Posts } = require('../models');

const postInfo = [
  {
    title: 'AAA Post',
    content: 'AAAAAAAA'
  },
  {
    title: 'BBB Post',
    content: 'BBBBBBBBBB'
  },
  {
    title: 'CCC Post',
    content: 'CCCCCCCCCC'
  }
];

exports.seedPosts = () => Posts.bulkCreate(postInfo, {individualHooks: true} );
// module.export = seedPosts;