# Atoms

My take on an Atom is essentially a component that is small enough that it is generally rendering one thing. For example, the AuthRoute component only renders a Route, just with some tweaks to redirect at certain times.

## List of components

-   [AppRoute](#AppRoute)
-   [AuthRoute](#AuthRoute)
-   [LogoutMenuItem](#LogoutMenuItem)
-   [NavbarTitle](#NavbarTitle)
-   [OverlayImage](#OverlayImage)

### AppRoute

Renders a `react-router` `Route` that either renders a page in the app or redirects the user to the login screen if they are not logged in. Every page in the app uses the AppRoute component.

### AuthRoute

Renders a `react-router` `Route` that either renders the register/login page or redirects the user to the Dashboard. The point is to make it so the user cannot try to login or register when they are already logged in.

### LogoutMenuItem

Renders a Material-UI `MenuItem` that, when clicked, will log the user out. The point of this component is to put all the logout logic in one place that we can access. **Change this to be a Logout Box instead so we can use it in more than just Menus**

### NavbarTitle

Renders a header that serves as the title of a Navbar. It uses Material-UI's `Typography` component to do this, and if the user provides a path, then it will render it as a `Link` from `react-router`.

### OverlayImage

Renders a `div` with a background of a given image that will take in children to be put on top of the background image. It is only used on the public homepage.
