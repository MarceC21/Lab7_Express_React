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
  // Se cambio el tipo de contenido a text/plain
  if (req.url === "/info") {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("Ruta de información")
    return
  }


  // Ruta de estudiantes
  //Tiene Try Catch para manejar errores al leer el archivo
  
  if (req.url === "/api/student") {
    try {
      const filePath = path.join(process.cwd(), "datos.json")
      const texto = await fs.readFile(filePath, "utf-8") //Se puso await para esperar a que se lea el archivo antes de continuar
      res.writeHead(200, { "Content-Type": "application/json" })
      res.end(texto) // //Se cambio a texto para enviar el contenido del archivo como respuesta
    } catch (error) {
      res.writeHead(404, { "Content-Type": "text/plain" })
      res.end("Error, archivo no encontrado")
    }
    return
  }
  res.writeHead(200, { "Content-Type": "text/plain" })
  res.end("Ruta no encontrada")
}); // Se debe cerrar el bloque de código del createServer


server.listen(PORT, () => {
  console.log("Servidor corriendo en http://localhost:3001")
}); // Se debe cerrar el bloque de código del listen

