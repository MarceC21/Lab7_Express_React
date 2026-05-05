# Diferencias entre usar `http` y Express en Node.js

## Creación del servidor

### Con `http`

Se requiere crear manualmente el servidor:

```js
const server = http.createServer((req, res) => { ... })
```

Esto implica manejar directamente las solicitudes (`req`) y respuestas (`res`).

---

### Con Express

Se utiliza una aplicación:

```js
const app = express()
```

Express encapsula internamente la lógica de `http`, por lo que ya no es necesario crear el servidor manualmente

---

## Definición de rutas

### Con `http`

Las rutas se manejan manualmente:

```js
if (req.url === "/info") {
   ...
   return
}
```

Esto genera código repetitivo y poco escalable

---

### Con Express

Las rutas se definen de forma declarativa

```js
app.get("/info", (req, res) => { ... })
```

- Más claro
- Más ordenado
- Más fácil de mantener

---

## Manejo de respuestas

### Con `http`

Se deben configurar manualmente los headers y finalizar la respuesta:

```js
res.writeHead(200, { "Content-Type": "application/json" })
res.end(JSON.stringify(data))
```


---

### Con Express

Express simplifica esto con: 

```js
res.send("Texto")
res.json(data)
```

- No es necesario definir `Content-Type` manualmente
- No se usa `res.end()`
- Express lo maneja internamente

---

## Inicio del servidor

### Con `http`

```js
server.listen(PORT, () => { ... })
```

---

### Con Express

```js
app.listen(PORT, () => { ... })
```

Cambia el objeto (`server` → `app`), pero el concepto es el mismo

---

## Manejo de rutas no encontradas (404)

### Con `http`

Se utiliza un `if` final:

```js
res.writeHead(404)
res.end("Ruta no encontrada")
```

---

### Con Express

Se usa un middleware:

```js
app.use((req, res) => {
  res.status(404).send(`Ruta no encontrada: ${req.url}`)
})
```

- Más limpio
- Se ejecuta automáticamente si ninguna ruta coincide

---

## Manejo de lógica y archivos

En ambos casos se puede usar `async/await`, pero en Express se integra de forma más natural:

```js
app.get("/api/student", async (req, res) => {
  const data = await fs.readFile(...)
  res.json(JSON.parse(data))
})
```

---

## Comparación general

| Característica       | http                        | Express                     |
| -------------------- | --------------------------- | --------------------------- |
| Manejo de rutas      | Manual (`if`)               | Declarativo (`app.get`)     |
| Respuestas           | Manual (`writeHead`, `end`) | Automático (`send`, `json`) |
| Código               | Más largo                   | Más limpio                  |
| Escalabilidad        | Limitada                    | Alta                        |

---

## Conclusión

El uso de `http` permite comprender cómo funciona internamente un servidor en Node.js, pero requiere mayor control manual y genera código más complejo.

Por otro lado, Express abstrae esa complejidad, permitiendo desarrollar servidores de forma más rápida, clara y organizada.

Gracias a Express, es posible enfocarse más en la lógica de la aplicación que en los detalles técnicos del manejo de solicitudes y respuestas.

