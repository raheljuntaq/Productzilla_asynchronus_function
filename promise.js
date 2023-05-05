const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    const api = response.data;
    const incompleteApi = api.filter((todo) => todo.completed === false);
    console.log(incompleteApi.slice(0, 10));
  })
  .catch((error) => {
    console.log(error);
  });
