export const clearError = () => ({
  type: 'CLEAR_ERROR_STATUS'
});

export const setError = (message) => ({
  type: 'SET_ERROR_MESSAGE',
  message
});
