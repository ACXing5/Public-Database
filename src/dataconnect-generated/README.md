# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListPublicLists*](#listpubliclists)
  - [*GetUserReviews*](#getuserreviews)
- [**Mutations**](#mutations)
  - [*CreateMovie*](#createmovie)
  - [*UpdateListItemPosition*](#updatelistitemposition)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListPublicLists
You can execute the `ListPublicLists` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listPublicLists(): QueryPromise<ListPublicListsData, undefined>;

interface ListPublicListsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPublicListsData, undefined>;
}
export const listPublicListsRef: ListPublicListsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listPublicLists(dc: DataConnect): QueryPromise<ListPublicListsData, undefined>;

interface ListPublicListsRef {
  ...
  (dc: DataConnect): QueryRef<ListPublicListsData, undefined>;
}
export const listPublicListsRef: ListPublicListsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listPublicListsRef:
```typescript
const name = listPublicListsRef.operationName;
console.log(name);
```

### Variables
The `ListPublicLists` query has no variables.
### Return Type
Recall that executing the `ListPublicLists` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListPublicListsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListPublicListsData {
  lists: ({
    id: UUIDString;
    name: string;
    description?: string | null;
  } & List_Key)[];
}
```
### Using `ListPublicLists`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listPublicLists } from '@dataconnect/generated';


// Call the `listPublicLists()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listPublicLists();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listPublicLists(dataConnect);

console.log(data.lists);

// Or, you can use the `Promise` API.
listPublicLists().then((response) => {
  const data = response.data;
  console.log(data.lists);
});
```

### Using `ListPublicLists`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listPublicListsRef } from '@dataconnect/generated';


// Call the `listPublicListsRef()` function to get a reference to the query.
const ref = listPublicListsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listPublicListsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.lists);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.lists);
});
```

## GetUserReviews
You can execute the `GetUserReviews` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUserReviews(vars: GetUserReviewsVariables): QueryPromise<GetUserReviewsData, GetUserReviewsVariables>;

interface GetUserReviewsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserReviewsVariables): QueryRef<GetUserReviewsData, GetUserReviewsVariables>;
}
export const getUserReviewsRef: GetUserReviewsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUserReviews(dc: DataConnect, vars: GetUserReviewsVariables): QueryPromise<GetUserReviewsData, GetUserReviewsVariables>;

interface GetUserReviewsRef {
  ...
  (dc: DataConnect, vars: GetUserReviewsVariables): QueryRef<GetUserReviewsData, GetUserReviewsVariables>;
}
export const getUserReviewsRef: GetUserReviewsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserReviewsRef:
```typescript
const name = getUserReviewsRef.operationName;
console.log(name);
```

### Variables
The `GetUserReviews` query requires an argument of type `GetUserReviewsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetUserReviewsVariables {
  userId: UUIDString;
}
```
### Return Type
Recall that executing the `GetUserReviews` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserReviewsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserReviewsData {
  reviews: ({
    id: UUIDString;
    rating: number;
    text?: string | null;
    movie: {
      id: UUIDString;
      title: string;
    } & Movie_Key;
  } & Review_Key)[];
}
```
### Using `GetUserReviews`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUserReviews, GetUserReviewsVariables } from '@dataconnect/generated';

// The `GetUserReviews` query requires an argument of type `GetUserReviewsVariables`:
const getUserReviewsVars: GetUserReviewsVariables = {
  userId: ..., 
};

// Call the `getUserReviews()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUserReviews(getUserReviewsVars);
// Variables can be defined inline as well.
const { data } = await getUserReviews({ userId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUserReviews(dataConnect, getUserReviewsVars);

console.log(data.reviews);

// Or, you can use the `Promise` API.
getUserReviews(getUserReviewsVars).then((response) => {
  const data = response.data;
  console.log(data.reviews);
});
```

### Using `GetUserReviews`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserReviewsRef, GetUserReviewsVariables } from '@dataconnect/generated';

// The `GetUserReviews` query requires an argument of type `GetUserReviewsVariables`:
const getUserReviewsVars: GetUserReviewsVariables = {
  userId: ..., 
};

// Call the `getUserReviewsRef()` function to get a reference to the query.
const ref = getUserReviewsRef(getUserReviewsVars);
// Variables can be defined inline as well.
const ref = getUserReviewsRef({ userId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserReviewsRef(dataConnect, getUserReviewsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.reviews);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.reviews);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateMovie
You can execute the `CreateMovie` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createMovie(): MutationPromise<CreateMovieData, undefined>;

interface CreateMovieRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateMovieData, undefined>;
}
export const createMovieRef: CreateMovieRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createMovie(dc: DataConnect): MutationPromise<CreateMovieData, undefined>;

interface CreateMovieRef {
  ...
  (dc: DataConnect): MutationRef<CreateMovieData, undefined>;
}
export const createMovieRef: CreateMovieRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createMovieRef:
```typescript
const name = createMovieRef.operationName;
console.log(name);
```

### Variables
The `CreateMovie` mutation has no variables.
### Return Type
Recall that executing the `CreateMovie` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateMovieData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateMovieData {
  movie_insert: Movie_Key;
}
```
### Using `CreateMovie`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createMovie } from '@dataconnect/generated';


// Call the `createMovie()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createMovie();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createMovie(dataConnect);

console.log(data.movie_insert);

// Or, you can use the `Promise` API.
createMovie().then((response) => {
  const data = response.data;
  console.log(data.movie_insert);
});
```

### Using `CreateMovie`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createMovieRef } from '@dataconnect/generated';


// Call the `createMovieRef()` function to get a reference to the mutation.
const ref = createMovieRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createMovieRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.movie_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.movie_insert);
});
```

## UpdateListItemPosition
You can execute the `UpdateListItemPosition` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateListItemPosition(vars: UpdateListItemPositionVariables): MutationPromise<UpdateListItemPositionData, UpdateListItemPositionVariables>;

interface UpdateListItemPositionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateListItemPositionVariables): MutationRef<UpdateListItemPositionData, UpdateListItemPositionVariables>;
}
export const updateListItemPositionRef: UpdateListItemPositionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateListItemPosition(dc: DataConnect, vars: UpdateListItemPositionVariables): MutationPromise<UpdateListItemPositionData, UpdateListItemPositionVariables>;

interface UpdateListItemPositionRef {
  ...
  (dc: DataConnect, vars: UpdateListItemPositionVariables): MutationRef<UpdateListItemPositionData, UpdateListItemPositionVariables>;
}
export const updateListItemPositionRef: UpdateListItemPositionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateListItemPositionRef:
```typescript
const name = updateListItemPositionRef.operationName;
console.log(name);
```

### Variables
The `UpdateListItemPosition` mutation requires an argument of type `UpdateListItemPositionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateListItemPositionVariables {
  listId: UUIDString;
  movieId: UUIDString;
  position: number;
}
```
### Return Type
Recall that executing the `UpdateListItemPosition` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateListItemPositionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateListItemPositionData {
  listItem_update?: ListItem_Key | null;
}
```
### Using `UpdateListItemPosition`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateListItemPosition, UpdateListItemPositionVariables } from '@dataconnect/generated';

// The `UpdateListItemPosition` mutation requires an argument of type `UpdateListItemPositionVariables`:
const updateListItemPositionVars: UpdateListItemPositionVariables = {
  listId: ..., 
  movieId: ..., 
  position: ..., 
};

// Call the `updateListItemPosition()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateListItemPosition(updateListItemPositionVars);
// Variables can be defined inline as well.
const { data } = await updateListItemPosition({ listId: ..., movieId: ..., position: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateListItemPosition(dataConnect, updateListItemPositionVars);

console.log(data.listItem_update);

// Or, you can use the `Promise` API.
updateListItemPosition(updateListItemPositionVars).then((response) => {
  const data = response.data;
  console.log(data.listItem_update);
});
```

### Using `UpdateListItemPosition`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateListItemPositionRef, UpdateListItemPositionVariables } from '@dataconnect/generated';

// The `UpdateListItemPosition` mutation requires an argument of type `UpdateListItemPositionVariables`:
const updateListItemPositionVars: UpdateListItemPositionVariables = {
  listId: ..., 
  movieId: ..., 
  position: ..., 
};

// Call the `updateListItemPositionRef()` function to get a reference to the mutation.
const ref = updateListItemPositionRef(updateListItemPositionVars);
// Variables can be defined inline as well.
const ref = updateListItemPositionRef({ listId: ..., movieId: ..., position: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateListItemPositionRef(dataConnect, updateListItemPositionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.listItem_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.listItem_update);
});
```

