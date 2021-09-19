![Logo](src/assets/logo--secondary.svg)

# Che, ¿hoy donamos?

Cliente web de `Che, ¿hoy donamos?`, realizado en [ReactJS](https://reactjs.org/).

## Colores

| Color           | Hex                                                              |
| --------------- | ---------------------------------------------------------------- |
| Primary         | ![#ff2063](https://via.placeholder.com/10/ff2063?text=+) #ff2063 |
| Secondary       | ![#73b8b2](https://via.placeholder.com/10/73b8b2?text=+) #73b8b2 |
| Complementary 1 | ![#d79a9f](https://via.placeholder.com/10/d79a9f?text=+) #d79a9f |

## Demo

Insert gif or link to demo

## Tech Stack

React, ReactQuery, SASS + TailwindCSS

## Arquitectura

![Logo](docs/networking-architecture.png)

Son los `Servicios` quienes gestionan la comunicación con la `API`, siendo los responsables de los métodos HTTP a usar en cada petición, serializar los datos para que sean semánticos y los encargados de proveer a la `API` los datos en el formato que los necesita (ej. JWT en la cabecera de las peticiones).

Le dimos la responsabilidad de gestionar el estado del servidor (API/Backend) del lado del cliente(Frontend) a React Query, y decidimos utilizarlo a través de `custom hooks` los cuales usan los `hooks` que nos provee React Query. Estos `hooks` se comunican con los `Servicios` y mantienen el estado de la aplicación actualizado y sincronizado con el estado del servidor.

Nuestros `componentes` se comunicaran con el servidor a través de los `hooks` quienes a su vez harán que nuestros componentes se actualicen para que los datos que mostramos en ellos estén sincronizados con el servidor y nos permitirán realizar cambios en el también.

## Levantar Servicio Localmente

- Clonar el repositorio

```bash
  git clone https://link-to-project
```

- Ir al directorio del proyecto

```bash
  cd my-project
```

- Crear un archivo `.env` donde esten las variables de entorno especificadas en el `.env.example`

- Instalar las dependencias, utilizando npm

```bash
  npm install
```

- Levantar el servidor

```bash
  npm start
```

## Levantar Servicio Produción

- Clonar el repositorio

```bash
  git clone https://link-to-project
```

- Ir al directorio del proyecto

```bash
  cd my-project
```

- Crear un archivo `.env` donde esten las variables de entorno especificadas en el `.env.example`

- Instalar las dependencias, utilizando npm

```bash
  npm install
```

- Crear una version de producion en la carpeta `build`

```bash
  npm run build
```

## Authors

- [Alejandro Gonzalez](https://www.github.com/octokatherine)
- [Lautaro Pardo](https://www.github.com/octokatherine)
- [Facundo Correa](https://www.github.com/octokatherine)
- [Nicolás Machado da Silva](https://www.github.com/octokatherine)
