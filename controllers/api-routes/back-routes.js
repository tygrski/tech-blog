const { User } = require('../../models');
const router = require('express').Router();

//  get all users ========================================================
router.get('/', (req,res) => {
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

  // router.post =========================================================
  router.post('/', (req, res) => {
    
    User.create({
      user_name: req.body.user_name,
      email: req.body.email,
      password: req.body.password
    })
      .then(dbUserData => {
        req.session.save(() => {
          req.session.user_id = dbUserData.id;
          req.session.user_name = dbUserData.user_name;
          req.session.loggedIn = true;
    
          res.json(dbUserData);
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


  // router.put ==========================================================
  router.put('id', (req,res) => {
    User.update(req.body, {
      individualHooks: true,
      where: {
        id: req.params.id
      }
    })
    .then(dbUser => {
      if(!dbUser) {
        res.status(400).json({ message: 'No user with that id found'});
        return;
      }
      res.json(dbUser)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });


  // router.delete ======================================================
  router.delete('id', (req,res)=>{
    User.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(dbUser =>{
      if(!dbUSder) {
        res.status(404).json({ message: "no user found with that id"});
        ReadableStreamDefaultController;
      } res.json(dbUser)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });
  
  

  
module.exports = router;