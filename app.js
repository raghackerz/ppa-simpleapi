const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ msg: 'Hello Word' });
});

app.get('/sum', (req, res) => {
  if (isNaN(req.firstNum) || isNaN(req.firstNum)) {
    res.status(400).send({ msg: "Numbers are not valid" })
  }
  else {
    res.send({ sum: req.firstNum + req.secondNum });
  }
});

app.listen(3001, () => {
  console.log("Listening on port 3001")
});
