# Exceptional Outliner Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The project uses Typescript.

## Folder Structure

### `.storybook`

The `.storybook` directory contains the confirguation for Storybook, which is used to test components in isolation.

### `src`

The `src` directory contains all of the actual frontend code.

#### `components`

The `components` directory contains all of the React components that are rendered on the different pages. It is organized using Atomic Design. More information on the different components can be found in the readme (link it) and in each subdirectory.

#### `graphql`

The `graphql` directory contains all of the GraphQL queries and mutations that are used with the Apollo client. The `graphql-codegen` library is used to take the queries and mutations and generate hooks to use within the application.

#### `services`

The `services` directory contains any code that is unrelated to the actual rendering of the component and focus more on business logic sort of operations. This includes a lot with authentiation and authorization. More information can be found here (link to Security section of the main readme).

## Storybook

The `storybook` library is used for building components more quickly and keeping them maintainable. It is very useful for testing without needing to render the entire project.

## Material-UI

The Material-UI framework is used throughout the application to make life easier when it comes to reusing some of the great components they have already made. The old project used Bootstrap, but I wanted to use MUI as it is so popular and for me has some more useful components to make the application look a lot better.

## Testing

Tests needs to be added, but it'll use Jest and react testing library.
`
