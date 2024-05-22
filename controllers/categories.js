const sendAllCategories = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(req.categoriesArray));
};

const sendCategoryCreated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.category));
}; 

const sendCategoryById = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.category));
};

const sendCategoryUpdated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).send({message: "Данные о категориях обновлены"});
}; 

const sendCategoryDeleted = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.category));
  }; 


module.exports.sendAllCategories = sendAllCategories;
module.exports.sendCategoryCreated = sendCategoryCreated;
module.exports.sendCategoryById = sendCategoryById;
module.exports.sendCategoryUpdated = sendCategoryUpdated;
module.exports.sendCategoryDeleted = sendCategoryDeleted;
