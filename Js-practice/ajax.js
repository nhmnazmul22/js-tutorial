function exuGetApi() {
  let URL = "https://jsonplaceholder.typicode.com/users";
  let config = { method: "GET" };

  fetch(URL, config)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((err) => console.log("Error:" + err));
}

exuGetApi();
