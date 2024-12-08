const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // This will cause an error if the user doesn't exist
  res.send(`<h1>Hello, ${req.user.name}!</h1>`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});