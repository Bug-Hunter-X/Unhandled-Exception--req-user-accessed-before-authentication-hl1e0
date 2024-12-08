const express = require('express');
const app = express();
const port = 3000;

// Middleware to check if the user is authenticated
const authenticate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

app.get('/', authenticate, (req, res) => {
  res.send(`<h1>Hello, ${req.user.name}!</h1>`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});