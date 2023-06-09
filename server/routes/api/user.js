const router = require('express').Router();

const {
    getUsers, 
    createUser,
    getSingleUser,
  } = require('../../controllers/user-controller');

  router.route('/').get(getUsers).post(createUser)


  router.route('/:userId').get(getSingleUser)


  module.exports = router;