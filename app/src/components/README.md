# Components

The `components` directory is structured using principles from Atomic Design. They are broken up into Atoms, Molecules, Organisms, and Pages. I try to adhere to my definitions of each module below, but some of them are fuzzy, or I may make a misjudgment here or there. But overall, the structure is based on the following.

## Atom

My take on an Atom is essentially a component that is small enough that it is generally rendering one thing. For example, the AuthRoute component only renders a Route, just with some tweaks to redirect at certain times.

## Molecule

I see a Molecule as a combination of Atoms and only Atoms. It's a bit confusing and fuzzy for certain things, but something like a NavbarButtonList, which only renders multiple Buttons, is a molecule.

## Organism

An Organism is a combination of Organisms, Molecules, and Atoms, but it is still a component and not an actual page. The MainWrapper is a good example of this, as it is a fairly complex component with a few different smaller components being combined, but it is never a page on its own.

## Page

A Page is a combination of Organisms, Molecules, and Atoms, and it is the Page that a user would see on the front end. Pages could even be less complex than certain Organisms, depending on the content of the Page. No matter how simple or complex, a page the user will see will go into the Page folder. Another way of describing it is anywhere that I have a route defined to.
