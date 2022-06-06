const { db } = require("../db");

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

  products: (parent, { filter }, context) => {
    let filteredProducts = db.products;
    //only returns products on sale
    if (onSale) {
      const { onSale, avgRating } = filter
      if (filter.onSale === true) {
        filteredProducts = filteredProducts.filter(product => {
          return product.onSale;
        })
      }
      //if avgRating num is not in this array just returns all products
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredProducts = filteredProducts.filter(product => {
          let sumRating = 0;
          products.forEach((product) => {
            sumRating += product.rating
          });
          return [1, 2, 3, 4, 5].some(value => { return value > avgRating })
        })
      }
    }
    return products;
  },
  product: (parent, args, {db}) => {
    const productId = args.id;
    const product = db.products.find(product => product.id === productId);
    if (!product) return null;
    return product;
  },

  categories: (parent, args, {db}) => {
    return db.categories;
  },

  category: (parent, args, {db}) => {
    const { id } = args;
    const category = db.categories.find((category) => category.id === id);
    if (!category) return null;
    return category;
  }
}

