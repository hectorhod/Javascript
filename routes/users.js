var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', (req, res) => {
  res.render('users', { title: 'Cadastro de Usuario'});
});

/* GET New User page. */
router.get('users', (req, res) => {
  res.render('users', { title: 'Cadastro de Usuario'});
});

module.exports = router;