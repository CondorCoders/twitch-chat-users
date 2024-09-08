# Twitch Chat Stickers Album

Crea una pared de stickers con los usuarios activos en el chat que utilicen el comando `!sticker`

## Setup local

1. Crea un archivo `.env.local` con las siguientes variables

```
VITE_TWTICH_CLIENT_ID
VITE_TWITCH_ACCESS_TOKEN
```

2. Conseguir client ID creando una aplicación en [twtich develop console](https://dev.twitch.tv/console) y colocar el Client ID en `VITE_TWTICH_CLIENT_ID`

3. Para conseguir el `ACCESS TOKEN` usaremos el [Implicit grant flow](https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#implicit-grant-flow) de Twitch API. Copia la URL a continuacion y reemplaza `MY_CLIENT_ID` por tu Client ID que conseguiste en el paso anterios.
   `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=MY_CLIENT_ID&redirect_uri=http://localhost:3000&scope=channel%3Amanage%3Apolls+channel%3Aread%3Apolls&state=c3ab8aa609ea11e793ae92361f002671`

4. Si modificaste el link de manera correcta, verás una página de log in para autorizar a tu app con tu cuenta.
5. Una vez que aceptes, copia la URL de la página. En esta URL encontrarás `#access_token`. Copia el valor y colócalo en `VITE_TWITCH_ACCESS_TOKEN`
6. Actualiza `channels: ["condorcoders"],` en `App.tsx` con el nombre del canal de Twitch al que quieres

## Proximamente

- Refactorizar? Cambiar de tmi y twitch api a [twpurple](https://twurple.js.org/) para evitar el flow de autenticación
- Aplicar estilos
