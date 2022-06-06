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

# Mutation: eg. to add a new product operation:
mutation {
  addProduct(input: {
    name: "Office",
     description: "avs",
      quantity: 2,
      price: 2.22, 
      onSale: true, 
      categoryId:"12342ohub-0dg0-34jb-slj345jb532"
  }) {
    id
    name
    description,
      quantity,
      price, 
      onSale,
      category {
        id
      }
  }
}

# response
{
  "data": {
    "addProduct": {
      "id": "9757468a-ce97-48ce-b2fb-dc2502e50205",
      "name": "Office",
      "description": "avs",
      "quantity": 2,
      "price": 2.22,
      "onSale": true,
      "category": {
        "id": "12342ohub-0dg0-34jb-slj345jb532"
      }
    }
  }
}


# Mutation: eg. to update a category operation, in the variables/headers state the id of the category you want to update a field(s) from:

{
  "updateCategoryId": "12342ohub-0dg0-34jb-slj345jb532"
}

# query
mutation($updateCategoryId: ID!) {
  updateCategory(id: $updateCategoryId, input: {
    name: "test"
  }) {
    name
  }
}

# response

{
  "data": {
    "updateCategory": {
      "name": "test"
    }
  }
}

# then query the categories to see that the id specified above had the name of 'sport' but was now changed to 'test':

query {
  categories {
    id
    name
  }
}

# response 

{
  "data": {
    "categories": [
      {
        "id": "12342ohub-0dg0-34jb-slj345jb532",
        "name": "test"
      },
      {
        "id": "foi234-3nj4-93nk-skjhb23qr48v",
        "name": "romantic"
      },
      {
        "id": "98234bjhf-7fs4-28fk-3d6jfhj78sfs",
        "name": "kids"
      }
    ]
  }
}
