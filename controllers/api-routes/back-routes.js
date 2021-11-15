const router = require('express').Router();

 router.get('/', (res,req) => {
    console.log('ENTER GET ROUTE')
    res.status(200).json({ message: "Hello"})
  });

  // router.post

  // router.put

  // router.delete
  
  

  
module.exports = router;