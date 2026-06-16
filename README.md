# Juego del Amigo Secreto
---
Una aplicación web interactiva que automatiza el clásico sorteo del "Amigo Secreto". Permite ingresar nombres de participantes, valida las entradas en tiempo real y realiza un sorteo aleatorio con animaciones de reinicio automático.

## 🛠️ Tecnologías utilizadas
- HTML5 (Estructura semántica y accesibilidad)

- CSS3 (Diseño responsivo con variables y Flexbox)

- JavaScript (Vanilla) (Lógica de programación y manipulación del DOM)

## ⚙️ Características y Reglas del Juego
El proyecto fue desarrollado bajo las siguientes reglas de negocio y lógica de programación:

- Validación de entradas: No se permiten campos vacíos o con puros espacios en blanco.

- Filtro de caracteres: El sistema bloquea el ingreso de números en los nombres mediante expresiones regulares (Regex).

- Límite de participantes: Cuenta con un tope máximo de hasta 10 amigos por sorteo.
- Sorteo Aleatorio: Utiliza funciones matemáticas (Math.random) para garantizar que la elección sea 100% al azar.

- Temporizador de reinicio: Una vez mostrado el ganador en pantalla, el juego limpia la interfaz y el almacenamiento automáticamente después de 4 segundos para empezar una nueva partida.

## 🚀 Cómo ejecutar el proyecto localmente
Al ser una aplicación web estática, no necesitas instalar dependencias de servidores (como Node.js).

Clona este repositorio en tu computadora:

```
git clone https://github.com/Enmanuel-Miranda/TU_REPOSITORIO_AQUI.git
Entra a la carpeta del proyecto.
```
Haz doble clic sobre el archivo index.html para abrirlo directamente en cualquier navegador web.
