const { products } = require("../db");

exports.Category = {
  products: (parent, args, context) => {
    console.log('parent', parent);
    const categoryId = parent.id;
    return products.filter((product) => product.categoryId === categoryId);
  }
}