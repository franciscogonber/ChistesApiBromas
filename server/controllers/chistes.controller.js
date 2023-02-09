const Chiste = require("../models/chistes.model")
// ...recuperar un array de todos los documentos de la colección User
module.exports.obtenerTodosLosChistes = (request, response) => {
    Chiste.find()
        .then(chistes => {
            response.json(chistes);
        })
        .catch(err => response.json(err));
}
module.exports.obtenerUnChiste = (request, response) => {
    // ...recuperar 1 documento (el primer registro encontrado) que coincida con los criterios del objeto de consulta
    Chiste.findOne({ _id: request.params.idChiste })
        .then(chiste => {
            response.json(chiste);
        })
        .catch(err => response.json(err));
}
module.exports.actualizarChiste = (request, response) => {
    // ...actualizar 1 documento que coincida con los criterios del objeto de consulta
    Chiste.updateOne({ _id: request.params.idChiste }, request.body, { new: true })
        .then(chiste => {
            response.json(chiste);
        })
        .catch(err => response.json(err));
}
module.exports.eliminarChiste = (request, response) => {
    // ...eliminar 1 documento que coincida con los criterios del objeto de consulta
    Chiste.remove({_id: request.params.idChiste })
        .then(deleteChiste => {
            response.json(deleteChiste);
        })
        .catch(err => response.json(err));
}
module.exports.crearChiste = (request, response) => {
    Chiste.create(request.body)
        .then(newChiste => {
            response.json(newChiste);
        })
        .catch(err => response.json(err));
}
module.exports.encontrarChisteRandom = (request, response) => {
  Chiste.count().exec((err, count) => {
    var random = Math.floor(Math.random() * count);
    Chiste.findOne().skip(random)
      .then(randomChiste => response.json(randomChiste ))
      .catch(err => response.json(err));
  })
}

