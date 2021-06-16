const express = require("express");
const app = express();
const pdf = require('./routes');
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log("port connected");
});

app.use(express.json())

app.use('/api',pdf)