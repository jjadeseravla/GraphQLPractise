const { ApolloServer, gql } = require("apollo-server");


const products = [
  {
    id: "133-756-234sdf-w453",
    name: "Bike",
    description: "Mountain bike",
    quantity: 20,
    price: 99.99,
    onSale: false,
    categoryId: "12342ohub-0dg0-34jb-slj345jb532"
  },
  {
    id: "253-532-234deq-k453",
    name: "small BMX",
    description: "Doing Crazy stunts bike for kids",
    quantity: 20,
    price: 89.99,
    onSale: true,
    categoryId: "98234bjhf-7fs4-28fk-3d6jfhj78sfs"
  },
  {
    id: "424-012-213pvf-n035",
    name: "Tandem",
    description: "Bike for two",
    quantity: 20,
    price: 59.99,
    onSale: false,
    categoryId: "foi234-3nj4-93nk-skjhb23qr48v"
  },
  {
    id: "243-235-853erf-g342",
    name: "Love Bike",
    description: "pink one",
    quantity: 20,
    price: 29.99,
    onSale: true,
    categoryId: "foi234-3nj4-93nk-skjhb23qr48v"
  },
  {
    id: "253-643-264sdf-f904",
    name: "Static Bike",
    description: "Cycle Machine",
    quantity: 20,
    price: 49.99,
    onSale: false,
    categoryId: "12342ohub-0dg0-34jb-slj345jb532"
  },

]

const categories = [
  {
    id: "12342ohub-0dg0-34jb-slj345jb532",
    name: "sporty"
  },
  {
    id: "foi234-3nj4-93nk-skjhb23qr48v",
    name: "romantic"
  },
  {
    id: "98234bjhf-7fs4-28fk-3d6jfhj78sfs",
    name: "kids"
  },
]

//schema
//the String (or Float, Int or Boolean)is the scalar type or we can return object types
const typeDefs = gql`
  type Query {
    hello: [String]
    # numberOfAnimals: Int
    # price: Float
    # isCool: Boolean
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
  }

  type category {
    id: ID!
    name: String!
    products: [Product!]!
  }
`

const resolvers = {
  Query: {
    hello: () => {
      return ["Hello", "jade", null]
    },
    // numberOfAnimals: () => {
    //   return 5
    // },
    // price: () => {
    //   return 23.23
    // },
    // isCool: () => {
    //   true
    // },
  
    products: (parent, args, context) => {
      return products;
    },
    product: (parent, args, context) => {
      const productId = args.id;
      const product = products.find(product => product.id === productId);
      if (!product) return null;
      return product;
    },

    categories: (parent, args, context) => {
      return categories;
    },

    category: (parent, args, context) => {
      const { id } = args;
      const category = categories.find((category) => category.id === id);
      if (!category) return null;
      return category;
    }
  },
  Category: {
    products: (parent, args, context) => {
      console.log('parent', parent);
      const categoryId = parent.id;
      return products.filter((product) => product.categoryId === categoryId);
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