# Laboratorio Node.js + Express + React

## Descripción

Este laboratorio tiene como objetivo diferenciar entre el uso del módulo nativo `http` de Node.js y el uso de Express.js para la creación de servidores.

Además, se introducen conceptos básicos de React mediante el desarrollo de una calculadora funcional.

---

# Estructura del proyecto

```bash
Parte1/
│
├── Diferencias.md
├── datos.json
├── package.json
├── package-lock.json
└── server_express.js

Parte2/simple-calculator/
│
├── public/
├── src/
│   ├── components/
│   │   ├── ButtonPanel.js
│   │   └── Display.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── package-lock.json
└── index.html
```

---

# Parte 1: Servidor con Express

## Descripción

Se adaptó un servidor previamente desarrollado con `http` para utilizar únicamente Express, manteniendo la funcionalidad original.

Además, se documentaron las diferencias entre ambos enfoques en:

```bash
Parte1/Diferencias.md
```

---

## Cómo ejecutar

1. Ir a la carpeta:

```bash
cd Parte1
```

2. Instalar dependencias (solo la primera vez):

```bash
npm install
```

3. Ejecutar el servidor:

```bash
npm start
```

---

## Rutas disponibles

```bash
/                  -> Servidor activo
/info              -> Información en formato JSON
/saludo            -> Mensaje personalizado
/api/status        -> Estado del servidor
/api/student       -> Datos desde archivo JSON
```

---

## Evidencia

Link del video: https://youtu.be/SusGnDNlI2Q 

---

# Parte 2: Calculadora con React

## Descripción

Se desarrolló una calculadora basada en el tutorial de:

Building a Simple Calculator with React JS

Posteriormente se realizaron modificaciones para personalizar la interfaz y mejorar la experiencia de usuario.

---

## Cómo ejecutar

1. Ir a la carpeta:

```bash
cd Parte2/simple-calculator
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar la aplicación:

```bash
npm start
```

---

## Funcionalidades

La calculadora incluye:

* Suma
* Resta
* Multiplicación
* División

---

## Personalización

Se realizaron cambios en:

* Diseño visual
* Estilos CSS
* Distribución de componentes
* Botón de CLEAR

---

## Evidencia

Link del video: 

---
