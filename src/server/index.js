
const express = require('express');

const appBuilder = require('./app');
const authMiddleware = require('./auth');

const app = express();

if (!process.env.JWTSECRET) {
  console.error('No JWTSECRET provided');
  process.exit(1);
}

app.get('/prop', authMiddleware, (req, res) => {
  res.send(JSON.stringify(req.headers, null, 2));
});

if (process.env.NODE_ENV !== 'production') {
  console.log('Added dev route');
  app.use('/', appBuilder);
}

app.listen(3000);
