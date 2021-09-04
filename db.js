const mongoose = require('mongoose');
//const server = 'mongodb://localhost:27017/'
//const database = 'dadosdb';
const uri = "mongodb+srv://dbUser:userDB1234@cluster0.qpj9v.mongodb.net/dadosdb?retryWrites=true&w=majority";

mongoose.connect(uri).then(() => {
        console.log("Succesfully connect to MongoDB.");
    })
        .catch(err => {
            console.error("Connection error", err);
            process.exit();
        });


const userSchema = new mongoose.Schema({
    username: String,
    email: String
}, { collection: 'users'}
);

module.exports = {Mongoose:mongoose, UserSchema:userSchema};