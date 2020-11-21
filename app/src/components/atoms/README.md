# Atoms

## List of components

-   [AppRoute](#AppRoute)
-   [AuthRoute](#AuthRoute)
-   [Logout](#Logout)
-   [NavbarTitle](#NavbarTitle)
-   [OverlayImage](#OverlayImage)

## AppRoute

Renders a `react-router` `Route` that either renders a page in the app or redirects the user to the login screen if they are not logged in. Every page in the app uses the AppRoute component.

## AuthRoute

Renders a `react-router` `Route` that either renders the register/login page or redirects the user to the Dashboard. The point is to make it so the user cannot try to login or register when they are already logged in.

## Logout

Renders a `Material-UI` `Box` that wraps around any `children` that, when clicked, will log the user out. While I try to avoid Atoms containing any logic, the point of this component is to put all the logout logic in one place that we can access.

## NavbarTitle

Renders a header that serves as the title of a Navbar. It uses `Material-UI's` `Typography` component to do this, and if the user provides the `link` prop, then it will render it as a `Link` from `react-router`.

## OverlayImage

Renders a `Material-UI` `Box` with a background of a given image that will take in children to be put on top of the background image. Passing in the `fullPage` prop will make the image take up the entire viewport.
