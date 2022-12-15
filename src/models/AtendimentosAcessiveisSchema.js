const mongoose = require("mongoose")

const AtendimentosAcessiveisSchema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    nome: {
        type: String,
        required: true
    },
    telefone: {
        type: Number,
        required: true
    },
    endereco: {
        cep: {
            type: String, 
            required: false
        },
        rua: {
            type: String, 
            required: true
        },
        numero: {
            type: Number, 
            required: true
        },
        complemento: {
            type: String, 
            required: false
        },
        referencia: {
            type: String, 
            required: false
        },
        estado: {
            type: String, 
            required: true
        },
        cidade: {
            type: String, 
            required: true
        },
        bairro: {
            type: String,
            required: true
        }
    },
    tipo_de_servico: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("atendimentos-acessiveis", AtendimentosAcessiveisSchema)