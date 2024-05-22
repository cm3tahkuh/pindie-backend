// Файл routes/games.js

const gamesRouter = require('express').Router();

const middlewares = require('../middlewares/games');
const { checkAuth } = require("../middlewares/auth.js");
const controllers = require('../controllers/games');



gamesRouter.get('/games', middlewares.findAllGames, controllers.sendAllGames);
gamesRouter.get("/games/:id", middlewares.findGameById, controllers.sendGameById); 
gamesRouter.post("/games", middlewares.findAllGames, middlewares.checkIsGameExists, middlewares.checkIfCategoriesAvaliable, middlewares.checkEmptyFields, checkAuth, middlewares.createGame, controllers.sendGameCreated); 
gamesRouter.put("/games/:id", middlewares.findGameById, middlewares.checkIsVoteRequest, middlewares.checkIfUsersAreSafe, middlewares.checkIfCategoriesAvaliable, middlewares.checkEmptyFields, checkAuth, middlewares.updateGame, controllers.sendGameUpdated); 
gamesRouter.delete("/games/:id", checkAuth, middlewares.deleteGame, controllers.sendGameDeleted); 


module.exports = gamesRouter;