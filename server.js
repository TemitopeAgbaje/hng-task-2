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

  let result;
  if (req.body.operation_type === operation_type[0]) {
    result = data.x + data.y;
  } else if (req.body.operation_type === operation_type[1]) {
    result = data.x - data.y;
  } else if (req.body.operation_type === operation_type[2]) {
    result = data.x * data.y;
  }else{
    result = "Invalid operation_type"
  }

  return res.status(200).send({
    slackUsername: "Temitope Agbaje",
    result: result,
    operation_type: req.body.operation_type,
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
