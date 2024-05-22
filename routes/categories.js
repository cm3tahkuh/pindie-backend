const categoriesRouter = require("express").Router();

const middlewares = require("../middlewares/categories");
const controllers = require("../controllers/categories");

const { checkAuth } = require("../middlewares/auth.js");

categoriesRouter.get(
  "/categories",
  middlewares.findAllCategories,
  controllers.sendAllCategories
);
categoriesRouter.get(
  "/categories/:id",
  middlewares.findCategoryById,
  controllers.sendCategoryById
);
categoriesRouter.post(
  "/categories",
  middlewares.findAllCategories,
  middlewares.checkIsCategoryExists,
  middlewares.checkEmptyName,
  checkAuth,
  middlewares.createCategory,
  controllers.sendCategoryCreated
);
categoriesRouter.put(
  "/categories/:id",
  middlewares.checkEmptyName,
  checkAuth,
  middlewares.updateCategory,
  controllers.sendCategoryUpdated
);
categoriesRouter.delete(
  "/categories/:id",
  checkAuth,
  middlewares.deleteCategory,
  controllers.sendCategoryDeleted
);

module.exports = categoriesRouter;
