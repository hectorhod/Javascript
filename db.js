const mongoose = require('mongoose');
const server = 'mongodb://localhost:27017/'
const database = 'dadosdb';
<<<<<<< HEAD
const uri = "mongodb+srv://dbUser:userDB1234@cluster0.qpj9v.mongodb.net/testes?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
=======
//const uri = "mongodb+srv://dbUser:userDB1234@cluster0.qpj9v.mongodb.net/teste?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
>>>>>>> 1b549a05625d5dc0404eb9ac5feaebf5a2df18a6

mongoose.connect(server + database).then(() => {
        console.log("Succesfully connect to MongoDB.");
    })
        .catch(err => {
            console.error("Connection error", err);
            process.exit();
        });

module.exports = {Mongoose:mongoose};
<<<<<<< HEAD
=======
/*
const userSchema = new mongoose.Schema({
    username: String,
    email: String
}, { collection: 'users'}
);

module.exports = {Mongoose:mongoose, UserSchema:userSchema};
*/
>>>>>>> 1b549a05625d5dc0404eb9ac5feaebf5a2df18a6
