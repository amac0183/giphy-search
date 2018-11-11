export const search = (searchString) => ({
  type: 'SEARCH',
  searchString
})

export const loadResults = (results) => ({
  type: 'LOAD_RESULTS',
  results
})
