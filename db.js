const mongoose = require('mongoose');
const server = 'mongodb://localhost:27017/'
const database = 'dadosdb';
const uri = "mongodb+srv://dbUser:userDB1234@cluster0.qpj9v.mongodb.net/testes?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";

mongoose.connect(uri).then(() => {
        console.log("Succesfully connect to MongoDB.");
    })
        .catch(err => {
            console.error("Connection error", err);
            process.exit();
        });

module.exports = {Mongoose:mongoose};
