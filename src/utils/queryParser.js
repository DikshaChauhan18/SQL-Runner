import mockData from "../assets/data.json";

// Fake SQL query processing
export const executeQuery = (query) => {
  query = query.toLowerCase();

  if (query.includes("select * from users")) {
    return mockData.users;
  } else if (query.includes("select * from orders")) {
    return mockData.orders;
  } else {
    return [{ message: "Invalid Query!" }];
  }
};
