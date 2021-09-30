var express = require('express');
const app = require('../app');
var router = express.Router();
const db = require('../db');
const modelUser = require('../models/users');

/*POST login page*/
router.post('/login', async (req, res, next)=>{
  console.log(req.body.email);
  console.log(req.body.senha);
  const email = req.body.email;
  const senha = req.body.senha;
  const login = await db.Mongoose.model('users', modelUser.UserSchema).findOne({email});

  try {
    if (login.email == email && login.senha == senha) {
      console.log("Usuario Econtrado!");
      req.session.login = login;
      req.session.loggedIn = true;
      console.log(req.session);
      res.redirect('/');
       
    } else {
      console.log('Senha Incorreta');
      res.redirect('/');
    }
    
  } catch(err){
    //next(err);
    console.log('Usuario nao encontrado');
    res.redirect('/');
  }
});

/*GET login page*/
router.get('/login', (req,res)=>{
  res.render('login', { title: 'Login'});
});

/* GET home page. */
router.get('/', async (req, res) => {
<<<<<<< HEAD
  if (!req.session.loggedIn) {
    
    res.redirect("/login");
  
  } else {
    const Users = db.Mongoose.model('users', modelUser.UserSchema, 'users');
    const docs = await Users.find({}).lean().exec();
    res.render('index', { title: 'Lista de Clientes', docs });
  }
  
=======
  const Users = db.Mongoose.model('users', modelUser.UserSchema, 'users');
 
  const docs = await Users.find({}).lean().exec();
  res.render('index', { title: 'Lista de Clientes', docs });
>>>>>>> 1b549a05625d5dc0404eb9ac5feaebf5a2df18a6
});

/* GET New User page. */
router.get('/users', (req, res) => {
  res.render('users', { title: 'Cadastro de Usuário' });
});

// POST new user //
router.post('/users', async (req, res, next) => {

  const nome = req.body.nome;
  const sobrenome = req.body.sobrenome;
  const email = req.body.email;
  const idade = req.body.idade;
  const cidade = req.body.cidade;
  const uf = req.body.uf;
  const cep = req.body.cep;
  const senha = req.body.senha;

  const Users = db.Mongoose.model('users', modelUser.UserSchema, 'users');
  const user = new Users({nome,sobrenome,email,idade,cidade,uf,cep,senha});

  try {
    await user.save();
    console.log("Usuario criado com exito");
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

router.get('/logout',(req,res)=>
{
req.session.destroy((err)=>{})
//res.send('Thank you! Visit again')
res.redirect("/");
})

 module.exports = router;
 