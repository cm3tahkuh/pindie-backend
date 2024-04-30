// Файл routes/games.js

const gamesRouter = require('express').Router();

const middlewares = require('../middlewares/games');
const controllers = require('../controllers/games');



gamesRouter.get('/games', middlewares.findAllGames, controllers.sendAllGames);
gamesRouter.get("/games/:id", middlewares.findGameById, controllers.sendGameById); 
gamesRouter.post("/games", middlewares.findAllGames, middlewares.checkIsGameExists, middlewares.checkIfCategoriesAvaliable, middlewares.checkEmptyFields, middlewares.createGame, controllers.sendGameCreated); 
gamesRouter.put("/games/:id", middlewares.findGameById, middlewares.checkIfUsersAreSafe, middlewares.checkIfCategoriesAvaliable, middlewares.checkEmptyFields, middlewares.updateGame, controllers.sendGameUpdated); 
gamesRouter.delete("/games/:id", middlewares.deleteGame, controllers.sendGameDeleted); 

module.exports = gamesRouter;