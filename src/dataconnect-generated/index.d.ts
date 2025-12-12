import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateMovieData {
  movie_insert: Movie_Key;
}

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

export interface GetUserReviewsVariables {
  userId: UUIDString;
}

export interface ListItem_Key {
  listId: UUIDString;
  movieId: UUIDString;
  __typename?: 'ListItem_Key';
}

export interface ListPublicListsData {
  lists: ({
    id: UUIDString;
    name: string;
    description?: string | null;
  } & List_Key)[];
}

export interface List_Key {
  id: UUIDString;
  __typename?: 'List_Key';
}

export interface Movie_Key {
  id: UUIDString;
  __typename?: 'Movie_Key';
}

export interface Review_Key {
  id: UUIDString;
  __typename?: 'Review_Key';
}

export interface UpdateListItemPositionData {
  listItem_update?: ListItem_Key | null;
}

export interface UpdateListItemPositionVariables {
  listId: UUIDString;
  movieId: UUIDString;
  position: number;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

export interface Watch_Key {
  id: UUIDString;
  __typename?: 'Watch_Key';
}

interface CreateMovieRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateMovieData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateMovieData, undefined>;
  operationName: string;
}
export const createMovieRef: CreateMovieRef;

export function createMovie(): MutationPromise<CreateMovieData, undefined>;
export function createMovie(dc: DataConnect): MutationPromise<CreateMovieData, undefined>;

interface ListPublicListsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPublicListsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListPublicListsData, undefined>;
  operationName: string;
}
export const listPublicListsRef: ListPublicListsRef;

export function listPublicLists(): QueryPromise<ListPublicListsData, undefined>;
export function listPublicLists(dc: DataConnect): QueryPromise<ListPublicListsData, undefined>;

interface UpdateListItemPositionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateListItemPositionVariables): MutationRef<UpdateListItemPositionData, UpdateListItemPositionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateListItemPositionVariables): MutationRef<UpdateListItemPositionData, UpdateListItemPositionVariables>;
  operationName: string;
}
export const updateListItemPositionRef: UpdateListItemPositionRef;

export function updateListItemPosition(vars: UpdateListItemPositionVariables): MutationPromise<UpdateListItemPositionData, UpdateListItemPositionVariables>;
export function updateListItemPosition(dc: DataConnect, vars: UpdateListItemPositionVariables): MutationPromise<UpdateListItemPositionData, UpdateListItemPositionVariables>;

interface GetUserReviewsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserReviewsVariables): QueryRef<GetUserReviewsData, GetUserReviewsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetUserReviewsVariables): QueryRef<GetUserReviewsData, GetUserReviewsVariables>;
  operationName: string;
}
export const getUserReviewsRef: GetUserReviewsRef;

export function getUserReviews(vars: GetUserReviewsVariables): QueryPromise<GetUserReviewsData, GetUserReviewsVariables>;
export function getUserReviews(dc: DataConnect, vars: GetUserReviewsVariables): QueryPromise<GetUserReviewsData, GetUserReviewsVariables>;

