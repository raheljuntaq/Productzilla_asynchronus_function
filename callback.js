const axios = require("axios");

function getCompletedApi(callback) {
  axios.get("https://jsonplaceholder.typicode.com/todos", (error, response) => {
    if (error) {
      callback(error, null);
    } else {
      const api = response.data;
      const completedApi = api.filter((todo) => todo.completed === true);
      callback(null, completedApi.slice(0, 10));
    }
  });
}

getCompletedApi((error, completedApi) => {
  if (error) {
    console.log(error);
  } else {
    console.log(completedApi);
  }
});
