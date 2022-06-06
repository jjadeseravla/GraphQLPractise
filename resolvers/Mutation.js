const { v4: uuid } = require("uuid");

exports.Mutation = {
  addCategory: (parent, { input }, { db}) => {
    const { name } = input;
    const newCategory = {
      id: uuid(),
      name
    }
    db.categories.push(newCategory);
    return newCategory;
  },

  addProduct: (parent, { input }, { db }) => {
    const { name, description,  quantity,
      price, 
      onSale, 
      categoryId} = input;
    const newProduct = {
      id: uuid(),
      name,
      description,
      quantity,
      price, 
      onSale, 
      categoryId,
    }
    db.products.push(newProduct);
    return newProduct;
  },

  deleteCategory: (parent, {id}, { db }) => {
    db.categories = db.categories.filter(category => category.id !== id);
    db.products = db.products.map(product => {
      if (product.categoryId === id) return {
        ...product,
        categoryId: null
      }
      else return product;
    })
    return true;
  },

  updateCategory: (parent, { id, input }, { db }) => {
    // find index of element that shares this id
    const index = db.categories.findIndex(category => category.id === id);
    //if index does not exist
    if (index === -1) return null;
    db.categories[index] = {
      ...db.categories[index],
      ...input,
    };
    return db.categories[index];
  }
}