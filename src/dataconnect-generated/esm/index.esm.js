import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'public-database',
  location: 'us-east4'
};

export const createMovieRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateMovie');
}
createMovieRef.operationName = 'CreateMovie';

export function createMovie(dc) {
  return executeMutation(createMovieRef(dc));
}

export const listPublicListsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPublicLists');
}
listPublicListsRef.operationName = 'ListPublicLists';

export function listPublicLists(dc) {
  return executeQuery(listPublicListsRef(dc));
}

export const updateListItemPositionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateListItemPosition', inputVars);
}
updateListItemPositionRef.operationName = 'UpdateListItemPosition';

export function updateListItemPosition(dcOrVars, vars) {
  return executeMutation(updateListItemPositionRef(dcOrVars, vars));
}

export const getUserReviewsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserReviews', inputVars);
}
getUserReviewsRef.operationName = 'GetUserReviews';

export function getUserReviews(dcOrVars, vars) {
  return executeQuery(getUserReviewsRef(dcOrVars, vars));
}

