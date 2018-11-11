export const search = (text) => ({
  type: 'SEARCH',
  text
})

export const loadResults = (response) => ({
  type: 'LOAD_RESULTS',
  response
})
