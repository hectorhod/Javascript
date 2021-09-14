var express = require('express');
var router = express.Router();
const db = require('../db');
const modelUser = require('../models/users');

/* GET users listing. */
router.get('/users', (req, res) => {
  res.render('users', { title: 'Cadastro de Usuario'});
});

/* GET New User page. */
router.get('/users', (req, res) => {
  res.render('users', { title: 'Cadastro de Usuario'});
});

/* POST novo usuario */
router.post('/users', async (req, res) =>{
/*
  const dict = {
    nome:req.body.nome,
    sobrenome:req.body.sobrenome,
    email:req.body.email,
    idade:req.body.idade,
    cidade:req.body.cidade,
    uf:req.body.uf,
    cep:req.body.cep,
    senha:req.body.senha,
  };
  */
  const nome = req.body.nome;
  const sobrenome = req.body.sobrenome;
  const email = req.body.email;
  const idade = req.body.idade;
  const cidade = req.body.cidade;
  const uf = req.body.uf;
  const cep = req.body.cep;
  const senha = req.body.senha;
  

  const Users = db.Mongoose.model('users', modelUser.UserSchema);
  //const user = new Users({dict});
  const user = new Users({nome,sobrenome,email,idade,cidade,uf,cep,senha});

  try {
    await user.save();
    console.log("Usuario criado com exito");
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

module.exports = router;