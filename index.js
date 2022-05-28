const { ApolloServer, gql } = require("apollo-server");


const products = [
  {
    id: "133-756-234sdf-w453",
    name: "Bike",
    description: "Mountain bike",
    quantity: 20,
    price: 99.99,
    onSale: false
  },
  {
    id: "253-532-234deq-k453",
    name: "BMX",
    description: "Doing Crazy stunts bike",
    quantity: 20,
    price: 89.99,
    onSale: true
  },
  {
    id: "424-012-213pvf-n035",
    name: "Tandem",
    description: "Bike for two",
    quantity: 20,
    price: 59.99,
    onSale: false
  },
  {
    id: "243-235-853erf-g342",
    name: "Love Bike",
    description: "pink one",
    quantity: 20,
    price: 29.99,
    onSale: true
  },
  {
    id: "253-643-264sdf-f904",
    name: "Static Bike",
    description: "Cycle Machine",
    quantity: 20,
    price: 49.99,
    onSale: false
  },

]

//schema
//the String (or Float, Int or Boolean)is the scalar type or we can return object types
const typeDefs = gql`
  type Query {
    hello: [String]
    numberOfAnimals: Int
    price: Float
    isCool: Boolean
    products: [Product!]!
  }

  type Product {
    id: String!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
  }
`

const resolvers = {
  Query: {
    hello: () => {
      return ["Hello", "jade", null]
    },
    numberOfAnimals: () => {
      return 5
    },
    price: () => {
      return 23.23
    },
    isCool: () => {
      true
    },
    products: () => {
      return products;
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log("Server ready at " + url);
})