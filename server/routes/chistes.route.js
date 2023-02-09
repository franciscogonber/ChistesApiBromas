const Controlador = require ("../controllers/chistes.controller");
module.exports = app => {
    app.get("/api/chistes/random", Controlador.encontrarChisteRandom);
    app.get("/api/chistes", Controlador.obtenerTodosLosChistes);
    app.get("/api/chistes/:idChiste", Controlador.obtenerUnChiste);
    app.post("/api/chistes/new", Controlador.crearChiste);
    app.put("/api/chistes/update/:idChiste", Controlador.actualizarChiste);
    app.delete("/api/chistes/delete/:idChiste", Controlador.eliminarChiste);
}