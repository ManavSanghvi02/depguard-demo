const express = require("express");
const Handlebars = require("handlebars");
const _ = require("lodash");

const app = express();
const page = Handlebars.compile("<h1>{{title}}</h1><ul>{{#each items}}<li>{{this}}</li>{{/each}}</ul>");

app.get("/", (req, res) => {
  const items = _.uniq(["apples", "pears", "apples", "plums"]);
  res.send(page({ title: "Shopping list", items }));
});

if (require.main === module) {
  app.listen(3000, () => console.log("Listening on http://localhost:3000"));
}

module.exports = app;
