export const search = ({favorites, searchString}) => ({
  type: 'SEARCH',
  favorites,
  searchString
});

export const loadResults = (results) => ({
  type: 'LOAD_RESULTS',
  results
});

export const updateFavoriteStatus = (id) => ({
  type: 'UPDATE_FAVORITE_STATUS',
  id
});

export const updateFavoritesStatuses = (favorites) => ({
  type: 'UPDATE_FAVORITE_STATUSES',
  favorites
});
