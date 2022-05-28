
exports.Category = {
  products: ({id: categoryId}, {filter}, context) => {
    // console.log('parent', parent); and filter is inside parent
    // const categories = context.categories;
    // const categoryId = parent.id;

    const categoryProducts = context.products.filter((product) => product.categoryId === categoryId);
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