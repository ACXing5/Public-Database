# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createMovie, listPublicLists, updateListItemPosition, getUserReviews } from '@dataconnect/generated';


// Operation CreateMovie: 
const { data } = await CreateMovie(dataConnect);

// Operation ListPublicLists: 
const { data } = await ListPublicLists(dataConnect);

// Operation UpdateListItemPosition:  For variables, look at type UpdateListItemPositionVars in ../index.d.ts
const { data } = await UpdateListItemPosition(dataConnect, updateListItemPositionVars);

// Operation GetUserReviews:  For variables, look at type GetUserReviewsVars in ../index.d.ts
const { data } = await GetUserReviews(dataConnect, getUserReviewsVars);


```