const mongoose = require('mongoose');
const server = 'mongodb://localhost:27017/'
const database = 'dadosdb';

mongoose.connect(server+database).then(() => {
        console.log("Succesfully connect to MongoDB.");
    })
        .catch(err => {
            console.error("Connection error", err);
            process.exit();
        });
/* Esta função esta com erro no 'collection'
function findAll(){
    return global.conn.collection("users").find().toArray();
}*/

const userSchema = new mongoose.Schema({
    username: String,
    email: String
}, { collection: 'users'}
);

//module.exports = { findAll }
module.exports = {Mongoose:mongoose, UserSchema:userSchema}