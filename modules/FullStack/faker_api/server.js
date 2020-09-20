const express = require("express");
const faker = require("faker");
const app = express();

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

// get users route
app.get("/api/users", (req, res) => {
  res.json( users );
})

class User {
  constructor() {
    this.id = faker.random.uuid();
    this.price = `$${faker.commerce.price()}`;
    this.department = faker.commerce.department();
  }
}
console.log(new User());

// hard coding data
const users = [
  new User(),
  new User(),
  new User(),
  new User(),
  new User()
]