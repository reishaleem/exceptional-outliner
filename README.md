# The Exceptional Outliner

This project is an outlining tool that allows users to create several Worlds and create Pages within those Worlds, linking them together and building a detailed wiki to outline or flesh out their worlds. It's a side project meant mainly for learning, and I'm still slowly adding in the features to make it true to what it's stated to be. Originally, I used a [Spring Boot backend](https://github.com/reishaleem/exceptional-wiki-back-end), but this project uses the MERN stack.

## Folder Structure

### Root Directory

The root directory contains the code related to actually running the application. The reason for structuring the `server.ts` file in the root directory (and therefore the `package.json` for the backend) is that the frontend is served with the backend server, rather than running both at once. Therefore, I decided to put the `server.ts` file in the root directory, as it is where the entire app comes from. The actual `server.js` file that is run in production lives within the `server` folder, because the Typescript build goes there.

### `app`

The `app` directory contains all code related to the frontend, which is built with React. It was made using `create-react-app` and uses `Typescript`. More information can be found in the readme (make this link to it).

### `server`

The `server` directory contains all code related to the backend, which is built using Express and a MongoDB database. Originally I used a REST API, but I have since implemented a GraphQL API. More information can be found in the readme (make this link to it).
