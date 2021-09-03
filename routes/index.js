var express = require('express');
var router = express.Router();

/*
router.get('/', async (req, res, next) => {
  try{
    const docs = await global.db.findAll();
    res.render('index', { title: 'Lista de Clientes', docs});
  } catch (err) {
    next(err);
  }
})*/


/* GET home page. */
router.get('/', async (req, res) => {
  const Users = global.db.Mongoose.model('users', db.UserSchema, 'users');
 
  const docs = await Users.find({}).lean().exec();
  res.render('index', { title: 'Lista de Clientes', docs });
});

/* GET New User page. */
router.get('/users', (req, res) => {
  res.render('users', { title: 'Cadastro de Usuário' });
});

/* POST new user */
router.post('/users', async (req, res) => {
 
  const username = req.body.username;
  const email = req.body.email;
 
  const Users = global.db.Mongoose.model('users', global.db.UserSchema, 'users');
  const user = new Users({ username, email });
 
  try {
    await user.save();
    console.log("Usuario criado com exito");
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

 module.exports = router;
 