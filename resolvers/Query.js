const { products, categories } = require("../db");

exports.Query = {
  hello: () => {
    return ["Hello", "jade", null]
  },
  // numberOfAnimals: () => {
  //   return 5
  // },
  // price: () => {
  //   return 23.23
  // },
  // isCool: () => {
  //   true
  // },

  products: (parent, args, context) => {
    return products;
  },
  product: (parent, args, context) => {
    const productId = args.id;
    const product = products.find(product => product.id === productId);
    if (!product) return null;
    return product;
  },

  categories: (parent, args, context) => {
    return categories;
  },

  category: (parent, args, context) => {
    const { id } = args;
    const category = categories.find((category) => category.id === id);
    if (!category) return null;
    return category;
  }
}