const seedUser = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require ('../config/connection');

const seedTables = async () => {
  console.log("enter SEED TABLES ++++++++");
  await sequelize.sync();
  console.log('=======database synched');
  await seedUser.seedUser();
  console.log('=========User seeded');
  await seedPosts.seedPosts();
  console.log('==========Post seeded');
  await seedComments.seedComments();
  console.log('==========Comments seeded');
} 

seedTables()
.catch(err => {
  if(err) console.error(err) 
}); 
