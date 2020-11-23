# Exceptional Outliner Backend

The backend for the app is written in Typescript, and it uses Express and MongoDB. Another key component is GraphQL.

## Folder Structure

The backend is essentially split into 3 layers, the API, Services, and Data Access layers. Then there are other directories that contain useful or necessary items.

### API

The API lives in the `graphql` directory, which is where the schema is defined, along with type definitions and resolvers. All APIs come through here, and it acts similarly to how a router or controller might act. More information can be found in the readme (link it).

### Services

The services live in the `services` directory. Here, all the business logic is defined. The API will use a resolver to call different service methods, depending on what functionality is required. Separating the business logic for everything, from authentication/authorization to World creation, means it is easier to maintain the API and doesn't require changes in multiple places for the same thing.

### Data Access

Due to the size of the project, all accesses to the database actually take place within the services; however, I plan to separate them into Data Access Objects, in case the app grows large enough to warrant it. The database is a MongoDB database, and I use `mongoose` to interact with it. I use a local instance in testing, but in production, I use MongoDB Atlas.

### `common`

The `common` directory contains `types.ts`, which is used for the Typescript interfaces and types that need to be used in multiple places throughout the app.

### `models`

The `models` directory contains the database models required for the application. The app uses `mongoose` schemas to define the necessary models. The only model that actually gets accessed is the `User` model. The `World` model is a nested Document in `User`, and the `Page` model is a nested Document in `World`.
