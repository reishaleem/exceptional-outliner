The backend is split into 3 layers:

The API Layer - GraphQL
This is where the API is defined. It's sort of like what a router or controller might look like.

The logic layer
This is where any sort of logic that a query needs to use is defined. I think it's similar to a service in some ways, but it also
has some other things that aren't really the same. Still working on it.

The storage layer
This is where we access the data. It's just like a DAO or repository.

Other:
models
This is where all objects are defined, like users, worlds, and pages
