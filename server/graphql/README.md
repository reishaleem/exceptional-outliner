# GraphQL API

This directory houses all code related to the GraphQL API. It acts as something like a router or controller by taking incoming requests and sending them to the proper service.

## Folder Structure

### `mutations`

The `mutations` directory contains all Mutations that are used in the API. It is split between functions, like other directories.

### `queries`

The `queries` directory contains all Queries that are used in the API. Like other folders, it is split into different files for different functions.

### `resolvers`

The `resolvers` directory includes resolver methods for each API request. It is split between functions, just like the services might be. These resolvers take the incoming `args` from the request and put them into an actual, typed request, before calling the proper service.

### `typeDefs`

The `typeDefs` directory includes the custom GraphQL type definitions used throughout the API. They are nearly identical to the `mongoose` models, except they use GraphQL types. There may also be additional types that are not in the database, such as `AccessToken`, which is used for JwT related things.

### `schema.ts`

The scehma is defined within `schema.ts`. Here, each endpoint is defined in a Root Query object and a Root Mutation object.
