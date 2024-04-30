
  const usersRouter = require('express').Router();
  

  const middlewares = require('../middlewares/users');
  const controllers = require('../controllers/users');
  


  usersRouter.get('/users', middlewares.findAllUsers, controllers.sendAllUsers);
  usersRouter.get("/users/:id", middlewares.findUserById, controllers.sendUserById); 
  usersRouter.post("/users", middlewares.findAllUsers, middlewares.checkIsUserExists, middlewares.checkEmptyNameAndEmailAndPassword, middlewares.createUser, controllers.sendUserCreated); 
  usersRouter.put("/users/:id", middlewares.checkEmptyNameAndEmail, middlewares.updateUser, controllers.sendUserUpdated); 
  usersRouter.delete("/users/:id", middlewares.deleteUser, controllers.sendUserDeleted);


  module.exports = usersRouter;