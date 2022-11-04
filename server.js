const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 4000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", async (req, res, next) => {
  return res.status(200).send({
    slackUsername: "Temitope Agbaje",
    backend: true,
    age: 23,
    bio: "I am a very friendly and cheerful person",
  });
});

app.post("/", async (req, res) => {
  const operation_type = ["addition", "subtraction", "multiplication"];
  const data = {
    x: req.body.x,
    y: req.body.y,
    operation_type,
  };

  result = data.x + data.y;

  return res.status(200).send({
    slackUsername: "Temitope Agbaje",
    result: result,
    operation_type: data.operation_type[0],
   
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
