const { User } = require('../../models');

const router = require('express').Router();

router.get('/users', (req,res) => {
 console.log('**Enter GET all users')
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbUser => res.json(dbUser))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  // router.post
  router.get('/users/id', (req, res) => {
    User.findOne({
      attributes: { exclude: ['password'] },
      where: {
        id: req.params.id
      }
    })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
  // router.put

  // router.delete
  
  

  
module.exports = router;