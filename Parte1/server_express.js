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


// Ruta de información
app.get("/info", (req, res) => {
    const info = {
        mensaje: "La info del servidor/lab",
        curso: "Sistemas y tecologías web",
        tecnologia: "JavaScript y Node.js"
    }
    res.json(info) // Ahora se usa res.json en vez de res.end
})

// Ruta para saludo
app.get("/saludo", (req, res) => {
  res.send("Hola auxiliar, otra vez :S")
})

// Ruta de estudiante
app.get("/api/student", async (req, res) => {
    try {
      const filePath = path.join(process.cwd(), "datos.json")
      const texto = await fs.readFile(filePath, "utf-8") 
      res.json(JSON.parse(texto)) 
    } catch (error) {
        res.status(404).send("Error, archivo no encontrado")
    }
})


// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
});
