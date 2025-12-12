const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'public-database',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createMovieRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateMovie');
}
createMovieRef.operationName = 'CreateMovie';
exports.createMovieRef = createMovieRef;

exports.createMovie = function createMovie(dc) {
  return executeMutation(createMovieRef(dc));
};

const listPublicListsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPublicLists');
}
listPublicListsRef.operationName = 'ListPublicLists';
exports.listPublicListsRef = listPublicListsRef;

exports.listPublicLists = function listPublicLists(dc) {
  return executeQuery(listPublicListsRef(dc));
};

const updateListItemPositionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateListItemPosition', inputVars);
}
updateListItemPositionRef.operationName = 'UpdateListItemPosition';
exports.updateListItemPositionRef = updateListItemPositionRef;

exports.updateListItemPosition = function updateListItemPosition(dcOrVars, vars) {
  return executeMutation(updateListItemPositionRef(dcOrVars, vars));
};

const getUserReviewsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserReviews', inputVars);
}
getUserReviewsRef.operationName = 'GetUserReviews';
exports.getUserReviewsRef = getUserReviewsRef;

exports.getUserReviews = function getUserReviews(dcOrVars, vars) {
  return executeQuery(getUserReviewsRef(dcOrVars, vars));
};
