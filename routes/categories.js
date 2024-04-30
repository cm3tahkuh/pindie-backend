const categoriesRouter = require('express').Router();


const middlewares = require('../middlewares/categories');
const controllers = require('../controllers/categories');
 

categoriesRouter.get('/categories', middlewares.findAllCategories, controllers.sendAllCategories);
categoriesRouter.get("/categories/:id", middlewares.findCategoryById, controllers.sendCategoryById); 
categoriesRouter.post("/categories", middlewares.findAllCategories, middlewares.checkIsCategoryExists, middlewares.checkEmptyName, middlewares.createCategory, controllers.sendCategoryCreated);
categoriesRouter.put("/categories/:id", middlewares.checkEmptyName, middlewares.updateCategory, controllers.sendCategoryUpdated); 
categoriesRouter.delete("/categories/:id", middlewares.deleteCategory, controllers.sendCategoryDeleted);

module.exports = categoriesRouter;