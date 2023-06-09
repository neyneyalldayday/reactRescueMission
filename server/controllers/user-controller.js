const { User } = require('../models');




const userController = {
    // get all users
    async getUsers(req, res) {
      try {
        const dbUserData = await User.find()
          .select('-__v')
  
        res.json(dbUserData);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    },
    // get single user by id
    async getSingleUser(req, res) {
      try {
        const dbUserData = await User.findOne({ _id: req.params.userId })
          .select('-__v')          
          .populate('comments');
  
        if (!dbUserData) {
          return res.status(404).json({ message: 'No user with this id!' });
        }
  
        res.json(dbUserData);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    },
    // create a new user
    async createUser(req, res) {
      try {
        const dbUserData = await User.create(req.body);
        res.json(dbUserData);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    },

  

    
  };
  
  module.exports = userController;