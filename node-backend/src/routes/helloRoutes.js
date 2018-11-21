var express = require('express');
var app = express();
var router = express.Router();

//Schema

// Welcome Page
router.route('/welcome').get(function (req, res) {
  let hello = {greeting: "hello", number: 100, isCool: false};
  res.json(hello);
})

module.exports = router;
