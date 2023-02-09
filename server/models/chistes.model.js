const { default: mongoose } = require("mongoose");

// Crear un esquema para usuarios
const ChisteSchema = new mongoose.Schema({
    setup: {
        type: String,
        minlenght: [10, "Debe tener 10 caracteres como minimo"],
        required: [true, "Campo requerido"]
    },
    punchline: {
        type: String,
        minlenght: [3, "Debe tener 3 caracteres como minimo"],
        required: [true, "Campo requerido"]
    }
}, { timestamps: true })
// crear una función constructora para nuestro modelo y almacenarla en la variable 'User'
const Chiste = mongoose.model('Chiste', ChisteSchema);
module.exports=Chiste;

