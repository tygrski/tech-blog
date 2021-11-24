const seedUser = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require ('../config/connection');

const seedTables = async () => {
  await sequelize.sync({ force: true });
  console.log('=======database synched');
  await seedUser();
  console.log('=========User seeded');
  await seedPosts();
  console.log('==========Post seeded');
  await seedComments();
  console.log('==========Comments seeded');
}

seedTables();