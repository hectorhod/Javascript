const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        index: {unique:true}
    },
    idade: {
        type: Number,
    },
    cidade: {
        type: String,
        required: true
    },
    uf: {
        type: String,
        required: true
    },
    cep: {
        type: String,
        required: true
    },
    senha: {
        type: String,
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    }
});

module.exports = {UserSchema:userSchema};