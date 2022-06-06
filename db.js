const products = [
  {
    id: "133-756-234sdf-w453",
    name: "Bike",
    description: "Mountain bike",
    quantity: 20,
    price: 99.99,
    onSale: false,
    rating: 3,
    categoryId: "12342ohub-0dg0-34jb-slj345jb532"
  },
  {
    id: "253-532-234deq-k453",
    name: "small BMX",
    description: "Doing Crazy stunts bike for kids",
    quantity: 20,
    price: 89.99,
    onSale: true,
    rating: 4,
    categoryId: "98234bjhf-7fs4-28fk-3d6jfhj78sfs"
  },
  {
    id: "424-012-213pvf-n035",
    name: "Tandem",
    description: "Bike for two",
    quantity: 20,
    price: 59.99,
    onSale: false,
    rating: 2,
    categoryId: "foi234-3nj4-93nk-skjhb23qr48v"
  },
  {
    id: "243-235-853erf-g342",
    name: "Love Bike",
    description: "pink one",
    quantity: 20,
    price: 29.99,
    onSale: true,
    rating: 5,
    categoryId: "foi234-3nj4-93nk-skjhb23qr48v"
  },
  {
    id: "253-643-264sdf-f904",
    name: "Static Bike",
    description: "Cycle Machine",
    quantity: 20,
    price: 49.99,
    onSale: false,
    rating: 3,
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

exports.db = { products, categories };