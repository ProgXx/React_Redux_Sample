export const todoReducers = (state=[],action) => {
  switch (action.type) {
    case 'FETCH_TODOS':
      return action.payload;
    default:
      return state;
  }
}
