localhost:4000 simulate client with this example query

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