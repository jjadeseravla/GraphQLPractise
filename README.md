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

# See which products are on sale in a particular category 

query {
 category(id: "foi234-3nj4-93nk-skjhb23qr48v") {
   name
   products(filter: {
     onSale: true
   }) {
     name
     onSale
     avgRating: 4
   }
 }
}

# answer:

{
  "data": {
    "category": {
      "name": "romantic",
      "products": [
        {
          "name": "Love Bike",
          "onSale": true
        }
      ]
    }
  }
}

# Mutation: eg. to add a new category operation:

mutation {
  addCategory(input: {
    name: "Office"
  }) {
    id
    name
  }
}

# response

{
  "data": {
    "addCategory": {
      "id": "e2e406b5-8121-42be-8931-75731b3e3181",
      "name": "Office"
    }
  }
}
