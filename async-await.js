const axios = require("axios");

async function getData() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    const api = response.data;
    const completedApi = api.filter((todo) => todo.completed === true).slice(0, 10);
    const incompleteApi = api.filter((todo) => todo.completed === false).slice(0, 10);
    const combinedApi = completedApi.concat(incompleteApi);
    console.log(combinedApi);
  } catch (error) {
    console.log(error);
  }
}

getData();
