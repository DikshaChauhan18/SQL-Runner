export const predefinedQueries = [
  {
    name: "Get All Users",
    query: "SELECT * FROM users;",
    data: [
      { id: 1, name: "Alice", age: 25 },
      { id: 2, name: "Bob", age: 30 },
      { id: 3, name: "Charlie", age: 28 },
      { id: 4, name: "David", age: 22 },
      { id: 5, name: "Eve", age: 27 },
      { id: 6, name: "Frank", age: 35 },
      { id: 7, name: "Grace", age: 24 },
      { id: 8, name: "Hank", age: 29 },
      { id: 9, name: "Ivy", age: 26 },
      { id: 10, name: "Jack", age: 31 }
    ]
  },
  {
    name: "Get Orders Above 80",
    query: "SELECT * FROM orders WHERE amount > 80;",
    data: [
      { id: 105, user_id: 5, amount: 90 },
      { id: 106, user_id: 6, amount: 85 },
      { id: 109, user_id: 9, amount: 90 },
      { id: 110, user_id: 10, amount: 110 },
      { id: 112, user_id: 2, amount: 95 },
      { id: 116, user_id: 6, amount: 120 },
      { id: 119, user_id: 9, amount: 150 },
      { id: 120, user_id: 10, amount: 130 }
    ]
  },
  {
    name: "Get Orders by User ID = 3",
    query: "SELECT * FROM orders WHERE user_id = 3;",
    data: [
      { id: 103, user_id: 3, amount: 20 },
      { id: 113, user_id: 3, amount: 45 }
    ]
  },
  {
    name: "Get Users Younger than 30",
    query: "SELECT * FROM users WHERE age < 30;",
    data: [
      { id: 1, name: "Alice", age: 25 },
      { id: 3, name: "Charlie", age: 28 },
      { id: 4, name: "David", age: 22 },
      { id: 5, name: "Eve", age: 27 },
      { id: 7, name: "Grace", age: 24 },
      { id: 8, name: "Hank", age: 29 },
      { id: 9, name: "Ivy", age: 26 }
    ]
  },
  {
    name: "Get All orders",
    query: "SELECT * FROM orders;",
    data: [
      { "id": 101, "user_id": 1, "amount": 50 },
      { "id": 102, "user_id": 2, "amount": 75 },
      { "id": 103, "user_id": 3, "amount": 20 },
      { "id": 104, "user_id": 4, "amount": 100 },
      { "id": 105, "user_id": 5, "amount": 60 },
      { "id": 106, "user_id": 6, "amount": 85 },
      { "id": 107, "user_id": 7, "amount": 40 },
      { "id": 108, "user_id": 8, "amount": 55 },
      { "id": 109, "user_id": 9, "amount": 90 },
      { "id": 110, "user_id": 10, "amount": 110 },
      { "id": 111, "user_id": 1, "amount": 30 },
      { "id": 112, "user_id": 2, "amount": 95 },
      { "id": 113, "user_id": 3, "amount": 45 },
      { "id": 114, "user_id": 4, "amount": 80 },
      { "id": 115, "user_id": 5, "amount": 70 },
      { "id": 116, "user_id": 6, "amount": 120 },
      { "id": 117, "user_id": 7, "amount": 35 },
      { "id": 118, "user_id": 8, "amount": 65 },
      { "id": 119, "user_id": 9, "amount": 150 },
      { "id": 120, "user_id": 10, "amount": 130 }
    ]
  }
];
