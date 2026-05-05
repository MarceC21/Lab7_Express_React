// Ahhora usamos express en lugar de htpp 
import express from "express"
import fs from "fs/promises"
import path from "path"

// Importante crear la aplicación de express
const app = express()

//Se mantiene igual
const PORT = 3001

// Se cambia la creación del servidor para usar express
// En lugar de: const server = http.createServer(async (req, res) => {.....

// Se cambio a app.get para definir la ruta raíz y enviar una respuesta de texto
app.get("/", (req, res) => {
    res.send("Servidor activo")
})



// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
});
