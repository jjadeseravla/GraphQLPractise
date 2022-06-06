const { gql } = require("apollo-server");

//schema
//the String (or Float, Int or Boolean)is the scalar type or we can return object types
exports.typeDefs = gql`
  type Query {
    hello: [String]
    # numberOfAnimals: Int
    # price: Float
    # isCool: Boolean
    products(filter: ProductsFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Mutation {
    # underneath after colon you say what you want to return, eg a category that you just added
    addCategory(input: AddCategoryInput): Category!
    addProduct(input: AddProductInput): Product!
    deleteCategory(id: ID!): Boolean!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    category: Category
    rating: Int
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [Product!]!
  }

  input ProductsFilterInput {
    onSale: Boolean
    avgRating: Int
  }

  input AddCategoryInput {
    name: String!
  }

  input AddProductInput {
    name: String!
    description: String!,
    quantity: Int!,
    price: Float!,
    onSale: Boolean!,
    categoryId: String!
  }
`