const { db } = require("../db");

exports.Product = {
  category: ({categoryId}, args, {db}) => {
    // const { id } = category.id;
    return db.categories.find((category) => category.id === categoryId);
  }
}