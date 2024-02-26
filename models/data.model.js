const { Schema, model } = require('mongoose');

const DataSchema = Schema({
    "Clave cliente": {
        type: Number,
        required: [true, 'El id del usuario es obligatorio'],
    },

    "Nombre Contacto": {
        type: String,
    },

    "Correo": {
        type: String,
        required: [true, 'La temperatura es obligatoria']
    },

    "Teléfono Contacto": {
        type: Number,
        required: [true, 'La humedad es obligatoria'],
    },
});

module.exports = model('Datas', DataSchema);