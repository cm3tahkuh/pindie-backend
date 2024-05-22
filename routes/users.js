const usersRouter = require("express").Router();

const middlewares = require("../middlewares/users");
const controllers = require("../controllers/users");

const { checkAuth } = require("../middlewares/auth.js");

usersRouter.get("/users", middlewares.findAllUsers, controllers.sendAllUsers);
usersRouter.get(
  "/users/:id",
  middlewares.findUserById,
  controllers.sendUserById
);
usersRouter.get("/me", checkAuth, controllers.sendMe); 
usersRouter.post(
  "/users",
  middlewares.findAllUsers,
  middlewares.checkIsUserExists,
  middlewares.checkEmptyNameAndEmailAndPassword,
  checkAuth,
  middlewares.hashPassword,
  middlewares.createUser,
  controllers.sendUserCreated
);
usersRouter.put(
  "/users/:id",
  middlewares.checkEmptyNameAndEmail,
  checkAuth,
  middlewares.updateUser,
  controllers.sendUserUpdated
);
usersRouter.delete(
  "/users/:id",
  checkAuth,
  middlewares.deleteUser,
  controllers.sendUserDeleted
);

module.exports = usersRouter;
