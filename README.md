# Twitch Chat !Hack

Este proyecto permite que las fotos de perfil de los usuarios que escriban el comando `!hack` en el chat de Twitch aparezcan dentro de una computadora cambiando a través de una animación de glitch. Sus nombres de usuario se visualizan como archivos que "infectan" el sistema.

## Preview

![Preview](./src/assets/preview.gif)

## Setup local

1. Crea un archivo `.env.local` con las siguientes variables

```
VITE_TWTICH_CLIENT_ID
VITE_TWITCH_CLIENT_SECRET
```

2. Conseguir `CLIENT_ID` y `CLIENT_SECRET` creando una aplicación en [twtich develop console](https://dev.twitch.tv/console) y colocar el `CLIENT_ID` en `VITE_TWTICH_CLIENT_ID` y `CLIENT_SECRET` en `VITE_TWITCH_CLIENT_SECRET` de tu archivo `.env.local`.

3. Actualiza `channels: ["condorcoders"],` en `App.tsx` con el nombre del canal de Twitch al que quieres

## ¿Quieres contribuir? Aquí algunas cosas que puedes mejorar

- Mejorar diseño de la computadora
- Mejorar animación `glitch`
