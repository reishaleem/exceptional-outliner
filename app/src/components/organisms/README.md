# Organisms

An Organism is a combination of Organisms, Molecules, and Atoms, but it is still a component and not an actual page. The MainWrapper is a good example of this, as it is a fairly complex component with a few different smaller components being combined, but it is never a page on its own.

## List of components

-   [CardImageForm](#CardImageForm)
-   [MainDrawer](#MainDrawer)
-   [AppNavbar](#AppNavbar)
-   [PublicNavbar](#PublicNavbar)
-   [MainWrapper](#MainWrapper)

### CardImageForm

Renders a `Material-UI` `Card` and splits it into a `Grid` where one half of the grid is an image and the other half is a form. In the app, it is used for the `LoginForm` and `RegisterForm`.

### MainDrawer

Renders a `Material-UI` `Drawer` with a `SidebarButtonList`. The MainDrawer appears on the `UserDashboard` page and any page that has that same wrapper.

### AppNavbar

Renders a `Material-UI` `AppBar` with styling to make it able to slide along with a `Drawer` that will always appear with it.

### PublicNavbar

Renders a `Material-UI` `AppBar` that appears on the public page. It can become transparent and includes a `NavbarTitle` and `NavbarButtonList`.

### MainWrapper

Renders an `AppNavbar` and some version of the `Wrapper`, as well as a `Grid` that the `children` will fit into. Its purpose is to wrap around different pages that will always use that same navigation bar, drawer combination.
