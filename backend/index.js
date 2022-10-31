const express = require("express");
const app = express();
const PORT = 5000;
const data = [];
const bodyParser = require("body-parser");
const { Parser } = require("json2csv");
app.use(bodyParser());
const fs = require("fs");
app.post("/submit", (req, res) => {
  try {
    // console.log(req.body);
    const result = req.body;
    // console.log(result);
    // console.log(data);
    data.push(result);
    // console.log(data);
    res.status(200).json({ message: data });
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

var jsonexport = require("jsonexport");


app.get("/excel", (req, res) => {
  

  jsonexport(data, function (err, csv) {
    if (err) return console.log(err);
    console.log(csv);
    fs.writeFile("resume.csv", csv, function (err) {
      if (err) {
        throw err;
      } else {
        console.log("file saved");
      }
    });
    res.download("resume.csv");
    res.status(200).send(csv);
  });
});

app.get("/data", (req, res) => {
  try {

    res.status(200).send(data)

  } catch (err) {
    console.log(err);
  }
});



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
