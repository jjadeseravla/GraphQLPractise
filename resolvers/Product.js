const { categories } = require("../db");

exports.Product = {
  category: (parent, args, context) => {
    const { id } = category.id;
    return categories.find((category) => category.id === category.id);
  }
}