import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/client/react/components';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Root query for gets */
export type Query = {
  __typename?: 'Query';
  /** A list of all Users */
  users?: Maybe<Array<Maybe<User>>>;
  /** A single User */
  user?: Maybe<User>;
  /** A single World */
  userWorlds?: Maybe<Array<Maybe<World>>>;
  /** A list of all a user's Pages in all their Worlds */
  userPages?: Maybe<Array<Maybe<Page>>>;
};


/** Root query for gets */
export type QueryUserArgs = {
  id?: Maybe<Scalars['ID']>;
};


/** Root query for gets */
export type QueryUserWorldsArgs = {
  ownerId?: Maybe<Scalars['String']>;
};


/** Root query for gets */
export type QueryUserPagesArgs = {
  ownerId?: Maybe<Scalars['String']>;
};

/** A user that uses the application */
export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  penName?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  worlds?: Maybe<Array<Maybe<World>>>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

/** The worlds of the users' stories. Pretty much everything is associated with a World in some way, such as Pages */
export type World = {
  __typename?: 'World';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  genres?: Maybe<Array<Maybe<Scalars['String']>>>;
  pages?: Maybe<Array<Maybe<Page>>>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

/** The wiki-like pages that belong to a World */
export type Page = {
  __typename?: 'Page';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

/** Root mutation for updates, deletes, and creation */
export type Mutation = {
  __typename?: 'Mutation';
  /** Logs a User in, giving them an AccessToken */
  login?: Maybe<AccessToken>;
  /** Logs a User out by clearing the refresh token */
  logout?: Maybe<Scalars['Boolean']>;
  /** Creates a new User */
  createUser?: Maybe<User>;
  /** Update a user */
  updateUser?: Maybe<User>;
  /** Change a user's password */
  updateUserPassword?: Maybe<User>;
  /** Creates a new World and adds it to the Worlds array of the User with the given ownerId */
  createWorld?: Maybe<World>;
};


/** Root mutation for updates, deletes, and creation */
export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


/** Root mutation for updates, deletes, and creation */
export type MutationCreateUserArgs = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};


/** Root mutation for updates, deletes, and creation */
export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  penName: Scalars['String'];
  bio: Scalars['String'];
};


/** Root mutation for updates, deletes, and creation */
export type MutationUpdateUserPasswordArgs = {
  id: Scalars['ID'];
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
};


/** Root mutation for updates, deletes, and creation */
export type MutationCreateWorldArgs = {
  ownerId: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  genres: Array<Maybe<Scalars['String']>>;
};

/** An access token for authorization */
export type AccessToken = {
  __typename?: 'AccessToken';
  accessToken?: Maybe<Scalars['String']>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'AccessToken' }
    & Pick<AccessToken, 'accessToken'>
  )> }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type UserPagesQueryVariables = Exact<{
  ownerId: Scalars['String'];
}>;


export type UserPagesQuery = (
  { __typename?: 'Query' }
  & { userPages?: Maybe<Array<Maybe<(
    { __typename?: 'Page' }
    & Pick<Page, 'id' | 'name' | 'updatedAt'>
  )>>> }
);

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users?: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name'>
  )>>> }
);

export type CreateUserMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email' | 'password' | 'penName' | 'bio'>
  )> }
);

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  penName: Scalars['String'];
  bio: Scalars['String'];
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email' | 'password' | 'penName' | 'bio'>
  )> }
);

export type UpdateUserPasswordMutationVariables = Exact<{
  id: Scalars['ID'];
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type UpdateUserPasswordMutation = (
  { __typename?: 'Mutation' }
  & { updateUserPassword?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email' | 'password' | 'penName' | 'bio'>
  )> }
);

export type UserWorldsQueryVariables = Exact<{
  ownerId: Scalars['String'];
}>;


export type UserWorldsQuery = (
  { __typename?: 'Query' }
  & { userWorlds?: Maybe<Array<Maybe<(
    { __typename?: 'World' }
    & Pick<World, 'id' | 'name' | 'description' | 'genres' | 'updatedAt'>
  )>>> }
);

export type CreateWorldMutationVariables = Exact<{
  ownerId: Scalars['ID'];
  name: Scalars['String'];
  genres: Array<Maybe<Scalars['String']>>;
  description: Scalars['String'];
}>;


export type CreateWorldMutation = (
  { __typename?: 'Mutation' }
  & { createWorld?: Maybe<(
    { __typename?: 'World' }
    & Pick<World, 'id'>
  )> }
);


export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    accessToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    
export type LoginProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<LoginMutation, LoginMutationVariables>
    } & TChildProps;
export function withLogin<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoginMutation,
  LoginMutationVariables,
  LoginProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, LoginMutation, LoginMutationVariables, LoginProps<TChildProps, TDataName>>(LoginDocument, {
      alias: 'login',
      ...operationOptions
    });
};

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;
export type LogoutComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LogoutMutation, LogoutMutationVariables>, 'mutation'>;

    export const LogoutComponent = (props: LogoutComponentProps) => (
      <ApolloReactComponents.Mutation<LogoutMutation, LogoutMutationVariables> mutation={LogoutDocument} {...props} />
    );
    
export type LogoutProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>
    } & TChildProps;
export function withLogout<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LogoutMutation,
  LogoutMutationVariables,
  LogoutProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, LogoutMutation, LogoutMutationVariables, LogoutProps<TChildProps, TDataName>>(LogoutDocument, {
      alias: 'logout',
      ...operationOptions
    });
};

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const UserPagesDocument = gql`
    query UserPages($ownerId: String!) {
  userPages(ownerId: $ownerId) {
    id
    name
    updatedAt
  }
}
    `;
export type UserPagesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UserPagesQuery, UserPagesQueryVariables>, 'query'> & ({ variables: UserPagesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const UserPagesComponent = (props: UserPagesComponentProps) => (
      <ApolloReactComponents.Query<UserPagesQuery, UserPagesQueryVariables> query={UserPagesDocument} {...props} />
    );
    
export type UserPagesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<UserPagesQuery, UserPagesQueryVariables>
    } & TChildProps;
export function withUserPages<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UserPagesQuery,
  UserPagesQueryVariables,
  UserPagesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, UserPagesQuery, UserPagesQueryVariables, UserPagesProps<TChildProps, TDataName>>(UserPagesDocument, {
      alias: 'userPages',
      ...operationOptions
    });
};

/**
 * __useUserPagesQuery__
 *
 * To run a query within a React component, call `useUserPagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserPagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserPagesQuery({
 *   variables: {
 *      ownerId: // value for 'ownerId'
 *   },
 * });
 */
export function useUserPagesQuery(baseOptions: Apollo.QueryHookOptions<UserPagesQuery, UserPagesQueryVariables>) {
        return Apollo.useQuery<UserPagesQuery, UserPagesQueryVariables>(UserPagesDocument, baseOptions);
      }
export function useUserPagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserPagesQuery, UserPagesQueryVariables>) {
          return Apollo.useLazyQuery<UserPagesQuery, UserPagesQueryVariables>(UserPagesDocument, baseOptions);
        }
export type UserPagesQueryHookResult = ReturnType<typeof useUserPagesQuery>;
export type UserPagesLazyQueryHookResult = ReturnType<typeof useUserPagesLazyQuery>;
export type UserPagesQueryResult = Apollo.QueryResult<UserPagesQuery, UserPagesQueryVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    id
    name
  }
}
    `;
export type UsersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UsersQuery, UsersQueryVariables>, 'query'>;

    export const UsersComponent = (props: UsersComponentProps) => (
      <ApolloReactComponents.Query<UsersQuery, UsersQueryVariables> query={UsersDocument} {...props} />
    );
    
export type UsersProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<UsersQuery, UsersQueryVariables>
    } & TChildProps;
export function withUsers<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UsersQuery,
  UsersQueryVariables,
  UsersProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, UsersQuery, UsersQueryVariables, UsersProps<TChildProps, TDataName>>(UsersDocument, {
      alias: 'users',
      ...operationOptions
    });
};

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($name: String!, $email: String!, $password: String!) {
  createUser(name: $name, email: $email, password: $password) {
    id
    name
    email
    password
    penName
    bio
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;
export type CreateUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateUserMutation, CreateUserMutationVariables>, 'mutation'>;

    export const CreateUserComponent = (props: CreateUserComponentProps) => (
      <ApolloReactComponents.Mutation<CreateUserMutation, CreateUserMutationVariables> mutation={CreateUserDocument} {...props} />
    );
    
export type CreateUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>
    } & TChildProps;
export function withCreateUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateUserMutation,
  CreateUserMutationVariables,
  CreateUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateUserMutation, CreateUserMutationVariables, CreateUserProps<TChildProps, TDataName>>(CreateUserDocument, {
      alias: 'createUser',
      ...operationOptions
    });
};

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: ID!, $name: String!, $email: String!, $penName: String!, $bio: String!) {
  updateUser(id: $id, name: $name, email: $email, penName: $penName, bio: $bio) {
    id
    name
    email
    password
    penName
    bio
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;
export type UpdateUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateUserMutation, UpdateUserMutationVariables>, 'mutation'>;

    export const UpdateUserComponent = (props: UpdateUserComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateUserMutation, UpdateUserMutationVariables> mutation={UpdateUserDocument} {...props} />
    );
    
export type UpdateUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>
    } & TChildProps;
export function withUpdateUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateUserMutation,
  UpdateUserMutationVariables,
  UpdateUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateUserMutation, UpdateUserMutationVariables, UpdateUserProps<TChildProps, TDataName>>(UpdateUserDocument, {
      alias: 'updateUser',
      ...operationOptions
    });
};

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      penName: // value for 'penName'
 *      bio: // value for 'bio'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UpdateUserPasswordDocument = gql`
    mutation UpdateUserPassword($id: ID!, $oldPassword: String!, $newPassword: String!) {
  updateUserPassword(
    id: $id
    oldPassword: $oldPassword
    newPassword: $newPassword
  ) {
    id
    name
    email
    password
    penName
    bio
  }
}
    `;
export type UpdateUserPasswordMutationFn = Apollo.MutationFunction<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>;
export type UpdateUserPasswordComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>, 'mutation'>;

    export const UpdateUserPasswordComponent = (props: UpdateUserPasswordComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables> mutation={UpdateUserPasswordDocument} {...props} />
    );
    
export type UpdateUserPasswordProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>
    } & TChildProps;
export function withUpdateUserPassword<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateUserPasswordMutation,
  UpdateUserPasswordMutationVariables,
  UpdateUserPasswordProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables, UpdateUserPasswordProps<TChildProps, TDataName>>(UpdateUserPasswordDocument, {
      alias: 'updateUserPassword',
      ...operationOptions
    });
};

/**
 * __useUpdateUserPasswordMutation__
 *
 * To run a mutation, you first call `useUpdateUserPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserPasswordMutation, { data, loading, error }] = useUpdateUserPasswordMutation({
 *   variables: {
 *      id: // value for 'id'
 *      oldPassword: // value for 'oldPassword'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useUpdateUserPasswordMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>) {
        return Apollo.useMutation<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>(UpdateUserPasswordDocument, baseOptions);
      }
export type UpdateUserPasswordMutationHookResult = ReturnType<typeof useUpdateUserPasswordMutation>;
export type UpdateUserPasswordMutationResult = Apollo.MutationResult<UpdateUserPasswordMutation>;
export type UpdateUserPasswordMutationOptions = Apollo.BaseMutationOptions<UpdateUserPasswordMutation, UpdateUserPasswordMutationVariables>;
export const UserWorldsDocument = gql`
    query UserWorlds($ownerId: String!) {
  userWorlds(ownerId: $ownerId) {
    id
    name
    description
    genres
    updatedAt
  }
}
    `;
export type UserWorldsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UserWorldsQuery, UserWorldsQueryVariables>, 'query'> & ({ variables: UserWorldsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const UserWorldsComponent = (props: UserWorldsComponentProps) => (
      <ApolloReactComponents.Query<UserWorldsQuery, UserWorldsQueryVariables> query={UserWorldsDocument} {...props} />
    );
    
export type UserWorldsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<UserWorldsQuery, UserWorldsQueryVariables>
    } & TChildProps;
export function withUserWorlds<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UserWorldsQuery,
  UserWorldsQueryVariables,
  UserWorldsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, UserWorldsQuery, UserWorldsQueryVariables, UserWorldsProps<TChildProps, TDataName>>(UserWorldsDocument, {
      alias: 'userWorlds',
      ...operationOptions
    });
};

/**
 * __useUserWorldsQuery__
 *
 * To run a query within a React component, call `useUserWorldsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserWorldsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserWorldsQuery({
 *   variables: {
 *      ownerId: // value for 'ownerId'
 *   },
 * });
 */
export function useUserWorldsQuery(baseOptions: Apollo.QueryHookOptions<UserWorldsQuery, UserWorldsQueryVariables>) {
        return Apollo.useQuery<UserWorldsQuery, UserWorldsQueryVariables>(UserWorldsDocument, baseOptions);
      }
export function useUserWorldsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserWorldsQuery, UserWorldsQueryVariables>) {
          return Apollo.useLazyQuery<UserWorldsQuery, UserWorldsQueryVariables>(UserWorldsDocument, baseOptions);
        }
export type UserWorldsQueryHookResult = ReturnType<typeof useUserWorldsQuery>;
export type UserWorldsLazyQueryHookResult = ReturnType<typeof useUserWorldsLazyQuery>;
export type UserWorldsQueryResult = Apollo.QueryResult<UserWorldsQuery, UserWorldsQueryVariables>;
export const CreateWorldDocument = gql`
    mutation CreateWorld($ownerId: ID!, $name: String!, $genres: [String]!, $description: String!) {
  createWorld(
    ownerId: $ownerId
    name: $name
    genres: $genres
    description: $description
  ) {
    id
  }
}
    `;
export type CreateWorldMutationFn = Apollo.MutationFunction<CreateWorldMutation, CreateWorldMutationVariables>;
export type CreateWorldComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateWorldMutation, CreateWorldMutationVariables>, 'mutation'>;

    export const CreateWorldComponent = (props: CreateWorldComponentProps) => (
      <ApolloReactComponents.Mutation<CreateWorldMutation, CreateWorldMutationVariables> mutation={CreateWorldDocument} {...props} />
    );
    
export type CreateWorldProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateWorldMutation, CreateWorldMutationVariables>
    } & TChildProps;
export function withCreateWorld<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateWorldMutation,
  CreateWorldMutationVariables,
  CreateWorldProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateWorldMutation, CreateWorldMutationVariables, CreateWorldProps<TChildProps, TDataName>>(CreateWorldDocument, {
      alias: 'createWorld',
      ...operationOptions
    });
};

/**
 * __useCreateWorldMutation__
 *
 * To run a mutation, you first call `useCreateWorldMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorldMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorldMutation, { data, loading, error }] = useCreateWorldMutation({
 *   variables: {
 *      ownerId: // value for 'ownerId'
 *      name: // value for 'name'
 *      genres: // value for 'genres'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateWorldMutation(baseOptions?: Apollo.MutationHookOptions<CreateWorldMutation, CreateWorldMutationVariables>) {
        return Apollo.useMutation<CreateWorldMutation, CreateWorldMutationVariables>(CreateWorldDocument, baseOptions);
      }
export type CreateWorldMutationHookResult = ReturnType<typeof useCreateWorldMutation>;
export type CreateWorldMutationResult = Apollo.MutationResult<CreateWorldMutation>;
export type CreateWorldMutationOptions = Apollo.BaseMutationOptions<CreateWorldMutation, CreateWorldMutationVariables>;