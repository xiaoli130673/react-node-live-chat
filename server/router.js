const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );

  res.setHeader(
    'Access-Control-Allow-Methods',
    'PUT, GET, POST, PATCH, DELETE'
  );
  res.send({ response: 'Server is up and running.' }).status(200);
});

module.exports = router;
