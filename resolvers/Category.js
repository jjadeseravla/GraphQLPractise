
exports.Category = {
  products: ({id: categoryId}, {filter}, {db}) => {
    // console.log('parent', parent); and filter is inside parent
    // const categories = context.categories;
    // const categoryId = parent.id;

    const categoryProducts = db.products.filter((product) => product.categoryId === categoryId);
    let filteredCategoryProducts = categoryProducts;

    if (filter) {
      if (filter.onSale === true) {
        filteredCategoryProducts = filteredCategoryProducts.filter((product) => {
          return product.onSale;
        })
      }
    }
    return filteredCategoryProducts;
  }
}