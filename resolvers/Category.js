
exports.Category = {
  products: ({id: categoryId}, args, { categories}) => {
    console.log('parent', parent);
    // const categories = context.categories;
    // const categoryId = parent.id;
    return products.filter((product) => product.categoryId === categoryId);
  }
}