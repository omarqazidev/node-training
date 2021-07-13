const { apiCall, envVariables } = require("./modules");

// envVariables("PORT").then((value) => {
//   console.log("PORT", value);
// });

// apiCall("https://jsonplaceholder.typicode.com/todos/1").then((value) => {
//   console.log(value);
// });

async function main() {
  const envRespone = await envVariables("PORT");
  process.env.PORT = envRespone;
  console.log("PORT:", process.env.PORT);
  const apiRespone = await apiCall(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  console.log(apiRespone);
}

console.log("1");
main();
console.log("2");
