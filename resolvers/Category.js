const { products } = require("../db");

exports.Category = {
  products: (parent, args, context) => {
    console.log('parent', parent);
    console.log('context from category', context);
    const { sayHello } = context;
    sayHello();
    const categoryId = parent.id;
    return products.filter((product) => product.categoryId === categoryId);
  }
}