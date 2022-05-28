# localhost:4000 simulate client with this example query

query($categoryId: ID!) {
  category(id: $categoryID) {
    name
    products {
      name
      price
    }
  }
}

in variables:
{
  categoryId: "ghjvsbkjdnkfb"
}

or:

query {
  products {
    name
    category {
      name
    }
  }
}

# To filter products based on if they are on sale:

query {
  products(filter: {
    onSale: true
    }) {
     name
     onSale
   }
}