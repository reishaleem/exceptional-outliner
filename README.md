# The Exceptional Outliner

This project is an outlining tool that allows users to create several Worlds and create Pages within those Worlds, linking them together and building a detailed wiki to outline or flesh out their worlds. It's a side project meant mainly for learning, and I'm still slowly adding in the features to make it true to what it's stated to be. Originally, I used a [Spring Boot backend](https://github.com/reishaleem/exceptional-wiki-back-end), but this project uses the MERN stack.

## Folder Structure

### Root Directory

The root directory contains the code related to actually running the application. The reason for structuring the `server.ts` file in the root directory (and therefore the `package.json` for the backend) is that the frontend is served with the backend server, rather than running both at once. Therefore, I decided to put the `server.ts` file in the root directory, as it is where the entire app comes from. The actual `server.js` file that is run in production lives within the `server` folder, because the Typescript build goes there.

### `app`

The `app` directory contains all code related to the frontend, which is built with React. It was made using `create-react-app` and uses `Typescript`. More information can be found in the readme (make this link to it).

### `server`

The `server` directory contains all code related to the backend, which is built using Express and a MongoDB database. Originally I used a REST API, but I have since implemented a GraphQL API. More information can be found in the readme (make this link to it).

## Security

Authentication and authorization is implemented in this app, with authorization being done using JwT. Since this is just a side project meant for learning, I'm documenting how it works, but normally I probably wouldn't put this in the readme.

### Login

Authentication occurs either at the login screen or at the register screen. Using `bcrypt`, the server takes the email and password combination and checks it against the saved email and hashed password in the database. If it matches, it issues a JwT token and refresh token. In the case of a user creating a new account, the email and password will of course match, given it's the same email and password used to create the account in the first place.

### Access Tokens

Access tokens expire quickly, in this case, after two minutes. When the user makes a request, the access token is sent in the `authorization` header. The server then checks that token and ensures it matches the proper encryption with the JwT Secret used. It's used similarly to Express middleware, but it isn't exactly the same, as it instead runs before each protected endpoint and returns the payload, rather than using `next()`. Then from there, whatever service is required can use the payload that was sent.

#### Storing the Access Token

Access tokens are stored in memory on the front end. All auth related services for the frontend are in `app/src/services/auth.service.tsx`. There, you will see the variable `accessToken`, as well as a getter and setter for it. The way that we check if a user is logged in is through the access token, as it will be blank if they are not logged in. One potential issue with storing it this way is that when the access token changes via a refresh, the React app itself will not re-render, and therefore, if there is a stored `getCurrentUser()` call, it will remain the old value. But I haven't found a way this has been a problem yet, because I haven't encountered a position where that lack of an update actually changes anything.

### Refresh Tokens and Refreshing the Access Token

Along with an access token, a refresh token is issues at login. While access tokens expire quickly, refresh tokens last longer, 7 days to be exact. The main point of the refresh token is to ensure the user does not have to keep logging in after their access token expires after 2 minutes. The refresh token is not stored in memory, instead being stored as an HTTP Only cookie. The refresh token is used when a request is sent. Using the `apollo-link-token-refresh` library, when making the Apollo Client, it adds a link that checks if the current token is valid, and if it is not, then it will trigger a refresh. In the backend, it simply generates a new token and sends it back, and then we store the new token in memory on the frontend.

### Logout

When the user logs out, the Apollo Client cache is reset, and the logout mutation is executed. All the mutation does is send back a response with a cleared refresh token in the cookies. Then on the frontend, the `accessToken` variable is set to `""`, to signal there is no token and hence the user is logged out.
