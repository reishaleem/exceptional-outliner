# Molecules

I see a Molecule as a combination of Atoms and only Atoms. It's a bit confusing and fuzzy for certain things, but something like a NavbarButtonList, which only renders multiple Buttons, is a molecule.

## List of components

-   [AvatarMenu](#AvatarMenu)
-   [ButtonMenu](#ButtonMenu)
-   [CircularCard](#CircularCard)
-   [Footer](#Footer)
-   [LoginForm](#LoginForm)
-   [RegisterForm](#RegisterForm)
-   [NavbarButtonList](#NavbarButtonList)
-   [SidebarButtonList](#SidebarButtonList)

### AvatarMenu

Renders a `Material-UI` `Menu` with an `Avatar` as the button that triggers it. This menu is only used on the app side and in all the same way, so its content is included in the component.

### ButtonMenu

Renders a `Material-UI` `Menu` with an `Button` as the button that triggers it. This menu is only used on the public side and in all the same way, so its content is included in the component.

### CircularCard

Renders a `Material-UI` `Card` with styling to make it a circle. The size of the circle is passed in through the `props`, along with the icon (optional), title (optional), and body. It is used only on the public page, so its layout is designed with that in mind.

### Footer

Renders a `Material-UI` `Box` that includes a few `IconButtons` and a copyright symbol. It does not actually sit at the bottom of the screen; the page it is used in is meant to take up the height of the viewport.

### LoginForm

Renders a `form` using `Material-UI` `TextFields` as well as `Formik`. The `useFormik` hook is used to work with the `Material-UI` components. When submitted, it sends a login request to the server.

### RegisterForm

Renders a `form` using `Material-UI` `TextFields` as well as `Formik`. The `useFormik` hook is used to work with the `Material-UI` components. When submitted, it sends a create user request to the server.

### NavbarButtonList

Renders `Material-UI` `buttons` based on the input arrays of button text and destinations. The `buttons` are rendered as `Link` components.

### LoginForm

Renders `Material-UI` `ListItems` based on the input arrays of button text and destinations. The `ListItems` are rendered as `Link` components.
